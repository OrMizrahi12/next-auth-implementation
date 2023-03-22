import { getNavbarForLoggedInUser, getNavbarForLoggedOutUser } from '@/logic/LayoutLogic/LayoutLogic';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css'
import { AppContext } from '../context/contect';

const Navbar = ({ headerData, categories = [] }) => {

    const { getTotalPrice, getTotalQty, categoriesArray } = useContext(AppContext);
    const menuItems = headerData?.headerMenuItems || [];
    const totalPrice = getTotalPrice();
    const totalQuantity = getTotalQty();
    const [isResponsive, setIsResponsive] = useState(false);
    const { data: session } = useSession();

    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
    }
    const handleLogout = async () => {
        await signOut()
    }


    return (
        <div className={`${styles.topnav} ${isResponsive ? styles.responsive : ''}`} id="myTopnav">

            <Link className={styles.active} href="/">
                Home
            </Link>
            {
                session ? getNavbarForLoggedInUser(menuItems).map(menuItem => <Link
                    href={`/${menuItem.pageSlug}`}
                    key={menuItem.title} >
                    {menuItem.title}
                </Link>
                ) :
                    getNavbarForLoggedOutUser(menuItems).map(menuItem => <Link
                        href={`/${menuItem.pageSlug}`}
                        key={menuItem.title} >{
                            menuItem.title}
                    </Link>
                    )
            }
            {session && <button className={styles.logoutBtn} onClick={() => handleLogout()}>Log out</button>}
            <a className={styles.icon} onClick={toggleResponsive}>
                <i className="fa fa-bars">{isResponsive ? '-' : '+'}</i>
            </a>
            
            <div className={styles.dropdown}>
                <Link href={'#'} className={styles.dropbtn}>Categories
                    <i class="fa fa-caret-down"></i>
                </Link>
                <div className={styles.dropdownContent}>
                    {
                        categories.map(category => <Link
                            key={category.id}
                            className={styles.category}
                            href={`/category/${category.id}`}>
                            {category.name}
                        </Link>
                        )
                    }
                </div>
            </div>

            <Link href='/checkout' style={{ float: "right" }}>Total price: {totalPrice}</Link>
            <Link href='/checkout' style={{ float: "right" }}>Total quantity: {totalQuantity}</Link>
        </div>
    );
}

export default Navbar;

// shop , orders, account-details, register,cart,my-account,checkout,shop
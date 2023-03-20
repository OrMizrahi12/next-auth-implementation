import Link from "next/link";
import Style from '../../styles/UserDeshbord.module.css'
const UserDeshbord = () => {
    return (
        <div className={Style.userDeshbordWrapper}>
            <Link className={Style.userLink} href={'/orders'}>Your Orders</Link>
            <Link className={Style.userLink} href={'/wish-list'}>Your Wish List</Link>
        </div>
    )
}

export default UserDeshbord;
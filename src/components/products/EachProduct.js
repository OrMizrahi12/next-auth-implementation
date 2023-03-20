import { addToCartUtils, handleUpdateCartUtils } from '@/logic/cartControll/cartControllHelper'
import { playPopUp } from '@/logic/popupLogic/popupLogic'
import { getProductQtyInCartById, qtyCartSmallerThanStock } from '@/logic/productsControll/productControllHelper'
import { getAllIdOfWishList, wishListControll } from '@/logic/wishListLogic/wishListLogic'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import style from '../../styles/EachProduct.module.css'
import { AppContext } from '../context/contect'
import Popup from '../Popup/Popup'

const EachProduct = ({ product }) => {

    const { addToCart, updateCart ,setShowPopup} = useContext(AppContext)
    const [productCartQty, setProductCartQty] = useState(0)
    const [refreshQty, setRefreshQty] = useState(false)
    const [userCanAddToCart, setUserCanAddToCart] = useState(false)
    const [addToWishList, setAddToWishList] = useState(false)
    const [wishListIds, setWishListIds] = useState([])
    const [popupContent, setPopupContent] = useState("")
    const addItemToCart = () => {

        const result = addToCartUtils(product, addToCart, updateCart);

        if (result === false) {
            showCantAddToCartMsg(true);
        }
        else {
            showCantAddToCartMsg(false);
        }
        setRefreshQty(!refreshQty);
    }

    const handleUpdateCart = (increment) => {

        const result = handleUpdateCartUtils(increment, product, addToCart, updateCart);

        if (result === false) {
            showCantAddToCartMsg(true);
        }
        else {
            showCantAddToCartMsg(false);
        }
        setRefreshQty(!refreshQty);

    }

    const showCantAddToCartMsg = (showMsg) => {
        document.getElementById('cantAddToCartMsg').innerHTML = showMsg ? "You can't add more than " + product.stock_quantity + " to cart" : "";
        document.getElementById('cantAddToCartMsg').style.color = 'red';
    }

    const isOutOfStock = () => {
        if (product.stock_quantity < 1) {
            return true
        }
        return false
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const productQtyInCart = getProductQtyInCartById(product.id)
            setProductCartQty(productQtyInCart)
            const canAddToCart = qtyCartSmallerThanStock(product.id)
            setUserCanAddToCart(canAddToCart)
        }
    }, [refreshQty])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWishListIds(getAllIdOfWishList());
        }
    }, [addToWishList]);

    const btnClassnameControll = () => {
        if (productCartQty >= product.stock_quantity) {
            return style.productCardButtonDis + " " + style.productCardButton;
        }
        else {
            return style.productCardButton;
        }
    }

    const addToWishListHandler = () => {

       const isAdded = wishListControll(product);
       if(isAdded){
        setPopupContent("Added to wish list");
       }
       else{
        setPopupContent("Removed from wish list");
       }
        
        playPopUp(setShowPopup,500);
        setAddToWishList(prev => !prev);
        
    }

    return (
        <div className={style.productCard}>
            <button
                onClick={() => addToWishListHandler()}
                className={!wishListIds.includes(product.id) ? style.btnAddToWishList : style.btnAddedToWishList}>
            </button>
            <Link href={`/product/${product?.slug ?? ''}`}>
                <img className={style.productCardImage} src={product.images[0]?.src || ''} alt={product.name} />
            </Link>

            <div className={style.productCardBody}>

                <h2 className={style.productCardTitle}>{product.name}</h2>
                <span className={style.productCardPrice}>{product.price}</span>
                <p className={style.productCardDescription}>{product.image}</p>
                <button
                    id='productCardButton'
                    onClick={() => addItemToCart()}
                    disabled={isOutOfStock()}
                    className={btnClassnameControll()}>
                    Add to Cart
                </button>
                <p>{isOutOfStock() ? <span style={{ color: 'red' }}>out of stock</span> : "In stock: " + product.stock_quantity}</p>
                <button
                    className={style.updateItemBtn}
                    onClick={() => handleUpdateCart(true)}>
                    +
                </button>
                <span className={style.updateItemBtn}>{productCartQty}</span>
                <button
                    className={style.updateItemBtn}
                    onClick={() => handleUpdateCart(false)}>
                    -
                </button>
                <p id='cantAddToCartMsg' ></p>
                <Popup content={popupContent} />
            </div>
            
        </div>
    )
}
// stock_quantity
export default EachProduct
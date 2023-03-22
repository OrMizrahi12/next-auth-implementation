import { addToCartUtils, handleUpdateCartUtils } from '@/logic/cartControll/cartControllHelper'
import { playPopUp } from '@/logic/popupLogic/popupLogic'
import { getProductQtyInCartById } from '@/logic/productsControll/productControllHelper'
import { getAllIdOfWishList, wishListControll } from '@/logic/wishListLogic/wishListLogic'
import { useContext, useEffect, useState } from 'react'
import Style from '../../styles/SingleProduct.module.css'
import { AppContext } from '../context/contect'

const SingleProduct = ({ product }) => {


    const { addToCart, updateCart ,setShowPopup} = useContext(AppContext)
    const [productCartQty, setProductCartQty] = useState(0);
    const [refreshQty, setRefreshQty] = useState(false);
    const [addToWishList, setAddToWishList] = useState(false)
    const [wishListIds, setWishListIds] = useState([])
    const [popupContent, setPopupContent] = useState("")
    const handleCartUpdating = (increment) => {

        const resut = handleUpdateCartUtils(increment, product, addToCart, updateCart);

        if (resut === false) {
            showCantAddToCartMsg(true);
        }
        else {
            showCantAddToCartMsg(false);
        }
        setRefreshQty(!refreshQty);
    }

    const addToCartHandle = () => {

        const result = addToCartUtils(product, addToCart, updateCart);
        if (result === false) {
            showCantAddToCartMsg(true);
        }
        else {
            showCantAddToCartMsg(false);
        }
        setRefreshQty(!refreshQty);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const productQtyInCart = getProductQtyInCartById(product.id)
            setProductCartQty(productQtyInCart);
        }
    }, [refreshQty])



    const showCantAddToCartMsg = (showMsg) => {
        document.getElementById('waringMsgId').innerHTML = showMsg ? "You can't add more than " + product.stock_quantity + " to cart" : "";
        document.getElementById('waringMsgId').style.color = 'red';
    }

    const addToWishListHandler = () => {

        const isAdded = wishListControll(product);
        if (isAdded) {
            setPopupContent("Added to wish list");
        }
        else {
            setPopupContent("Removed from wish list");
        }
        playPopUp(setShowPopup, 500);
        setAddToWishList(prev => !prev);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWishListIds(getAllIdOfWishList());
        }
    }, [addToWishList]);



    return (
        <div className={Style.productCard}>
            <button
                onClick={() => addToWishListHandler()}
                className={!wishListIds.includes(product.id) ? Style.btnAddToWishList : Style.btnAddedToWishList}>
            </button>
            <img className={Style.productCardImage} src={product.images[0]?.src || ''} alt={product.name} />
            <div className={Style.productCardContent}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>

                <button onClick={() => addToCartHandle()} className={Style.productCardButton}>Add to Cart</button>
                <br />
                <button onClick={() => handleCartUpdating(true)} >+</button>
                <span >{productCartQty}</span>
                <button onClick={() => handleCartUpdating(false)}  >-</button>
                <p id='waringMsgId'></p>
            </div>
        </div>
    )
}




export default SingleProduct


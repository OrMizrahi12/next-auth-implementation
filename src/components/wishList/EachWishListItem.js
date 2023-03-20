import Style from '../../styles/wishList.module.css'
import { removeFromWishList } from '../../logic/wishListLogic/wishListLogic'
import { addToCartUtils } from '@/logic/cartControll/cartControllHelper'
import { useContext } from 'react';
import { AppContext } from '../context/contect';

const EachWishListItem = ({ wishListItem }) => {

  const { addToCart, updateCart } = useContext(AppContext)

  const moveWishListItemToCart = () => {

    const result = addToCartUtils(wishListItem, addToCart, updateCart);

    if (result === true) {
      removeFromWishList(wishListItem?.id);
    }
  }

  return (
    <div className={Style.eachWishListItem}>
      <img src={wishListItem.images[0]?.src || ''} alt={wishListItem.name} />
      <p className={Style.wishListTitle}>{wishListItem.name}</p>
      <button
        disabled={wishListItem.stock_quantity < 1}
        className={Style.btnEachWishListItem}
        onClick={() => moveWishListItemToCart()}>
        Move to cart
      </button>
      <br />
      <button onClick={() => removeFromWishList(wishListItem?.id)} >Romve</button>
      <p style={{ color: 'red' }}>{wishListItem.stock_quantity < 1 ? "out of stock" : ""}</p>
    </div>
  )
}

export default EachWishListItem

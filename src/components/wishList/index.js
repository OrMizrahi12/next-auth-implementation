import { getWishList } from '@/logic/wishListLogic/wishListLogic'
import React, { useEffect, useState } from 'react'
import EachWishListItem from './EachWishListItem'
import Style from '../../styles/wishList.module.css'

const WishListComponent = () => {
    const [wishList, setWishList] = useState([])
    const [userInteraction, setUserInteraction] = useState(false)
    
    useEffect(() => {
        const wishList = getWishList();
        setWishList(wishList);
    }, [userInteraction])



return (
    <div className={Style.wishListWrapper}>
        {
            wishList?.length === 0 ? <h2>Sorry, you have no wish...</h2> :

                wishList.map((item) => {
                    return (
                        <EachWishListItem setUserInteractionCallbac={setUserInteraction} key={item.is} wishListItem={item} />
                    )
                })
        }
    </div>
)
}

export default WishListComponent

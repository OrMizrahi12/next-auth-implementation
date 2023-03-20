import { getWishList } from '@/logic/wishListLogic/wishListLogic'
import React, { useEffect, useState } from 'react'
import EachWishListItem from './EachWishListItem'
import Style from '../../styles/wishList.module.css'

const WishListComponent = () => {
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWishList(getWishList());
        }
    }, []);


    return (
        <div className={Style.wishListWrapper}>
            {
                wishList?.length === 0 ? <h2>Sorry, you have no wish...</h2> : 
                
                wishList.map((item) => {
                    return (
                        <EachWishListItem key={item.is} wishListItem={item} />
                    )
                })
            }
        </div>
    )
}

export default WishListComponent

export const wishListControll = (item) => {

    const wishList = getWishList();
    const returnIndex = wishList.findIndex(wishListItem => wishListItem?.id === item.id);

    if (returnIndex === -1) {
        addToWishList(item)
        return true;
    }
    else {
        removeFromWishList(item.id);
        return false;
    }
}

export const addToWishList = (item) => {

    const wishList = getWishList();
    wishList.push(item);
    saveWishList(wishList);

}

export const getWishList = () => {

    const wishList = localStorage.getItem('wishList');

    if (wishList === null) {
        localStorage.setItem('wishList', JSON.stringify([]));
    }

    return wishList ? JSON.parse(wishList) : [];
}

export const removeFromWishList = (id) => {

    const wishList = getWishList();
    const returnIndex = wishList.findIndex(wishListItem => wishListItem?.id === id);

    if (returnIndex !== -1) {
        wishList.splice(returnIndex, 1);
    }

    saveWishList(wishList);
}

export const clearWishList = () => {
    localStorage.removeItem('wishList');
}

export const saveWishList = (wishList) => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
}

export const getAllIdOfWishList = () => {
    const wishList = getWishList();
    const allId = wishList.map(item => item.id);
    return allId;
}

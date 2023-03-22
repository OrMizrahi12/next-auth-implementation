import { getProductQtyInCartById, qtyCartSmallerThanStock } from "../productsControll/productControllHelper";

export const handleUpdateCartUtils = (increment, product, addToCart,updateCart) => {
    const productQtyInCart = getProductQtyInCartById(product.id)
    if (increment && productQtyInCart < product.stock_quantity || !productQtyInCart && increment) {
        addToCart(product);
        return true;
    }
    else if (increment && productQtyInCart >= product.stock_quantity) {
        return false;
    }
    else if (!increment && productQtyInCart >= 1) {
        updateCart(product.id, true);
        return true;
    }
};

export const addToCartUtils = (product, addToCart) => {
    const userCanAddToCart = qtyCartSmallerThanStock(product.id);

    if (userCanAddToCart !== false) {
        addToCart(product);
        return true;
    }
    else {
        return false;
    }
}

export const preperCartForOrder = (cart = []) => {
    const orderItems = [];

    cart.forEach(item => {
        const returnIndex = orderItems.findIndex(orderItem => orderItem?.product_id === item.id);

        if (returnIndex !== -1) {
            orderItems[returnIndex].quantity += 1;
        }
        else {
            orderItems.push({ product_id: item.id, quantity: 1 });
        }
    });

    return orderItems;
};

export const getCartForCheckout = (cart = []) => {

    const uniqueCart = cart.reduce((acc, curr) => {
        const existingItem = acc.find((item) => item.id === curr?.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...curr, quantity: 1 });
        }
        return acc;
    }, []);
    return uniqueCart;
}

export const getCartForCreateOrder = () => {

    try {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
        const cart = preperCartForOrder(cartFromLocalStorage) || [];
        return cart;
    }
    catch (err) {
        console.log(err);
    }
}



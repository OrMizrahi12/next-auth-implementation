import { createContext, useContext, useEffect, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [productsShopData, setProductsShopData] = useState([]);
    const [productsShopDataUpdated, setProductsShopDataUpdated] = useState(false);
    const [categoriesArray, setCategoriesArray] = useState([]);
    
    
    const addToCart = (product) => {
        const updatedCart = [...cart, product]
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        setCart(updatedCart)
    }

    const getTotalPrice = () => {

        let totalPrice = 0;
        cart.forEach(item => totalPrice += +item?.price);

        return totalPrice;
    }
    const getTotalQty = () => {
        return cart.length;
    }

    const updateCart = (productId, increment) => {

        if (increment) {
            decrementProductFromCart(productId)
        }
        else {
            incrementProductFromCart(productId);
        }
    }

    const decrementProductFromCart = (productId) => {
        setCart((prevCart) => {

            const indexToRemove = prevCart.findIndex((item) => item.id === productId);

            if (indexToRemove !== -1) {
                const newCart = [...prevCart];
                newCart.splice(indexToRemove, 1);
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            }
            return prevCart;
        });
    };

    const incrementProductFromCart = (productId) => {
        const product = cart.find(item => item?.id === productId);
        console.log("this", product)
        if (!product) {
            return;
        }
        else {
            addToCart(product);
        }
    }



    const removeFromCart = (productId) => {
        const newCart = cart.filter((item) => item.id !== productId);
        setCart(newCart);
        localStorage.setItem('cart', newCart);
    }

    return (
        <AppContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            setCart,
            getTotalPrice,
            getTotalQty,
            updateCart,
            showPopup,
            setShowPopup,
            productsShopData,
            setProductsShopData,
            productsShopDataUpdated,
            setProductsShopDataUpdated,
            categoriesArray, 
            setCategoriesArray
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useCart = () => useContext(AppContext)
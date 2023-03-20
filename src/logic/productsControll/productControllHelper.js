import { getCartForCheckout } from "../cartControll/cartControllHelper"; 
import { api } from "../Woocommerce/WoocommerceAPI";

export const isOutOfStock = (product) => {
    if (product?.stock_quantity < 1) {
        return true
    }
    return false
}



export const getProductsBySlug = async ( productSlug ) => {
 
    return await api.get(
		'products',
		{
			slug: productSlug || '', 
		},
	);
};

export const qtyCartSmallerThanStock = (productId) => {
    try {

        const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
        const cart = getCartForCheckout(cartFromLocalStorage) || [];
        const productById = cart.find(product => product.id === productId);

        if (productById !== undefined) {
            return productById?.quantity < productById?.stock_quantity;
        }
    }
    catch(err) {
        console.log(err);
    }
}

export const getProductQtyInCartById = (productId) => {
    try {
    
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
        const cart = getCartForCheckout(cartFromLocalStorage) || [];
        const productById = cart.find(product => product.id === productId);

        if (productById !== undefined) {
            return productById?.quantity;
        }
    }
    catch(err) {
        console.log(err);
    }
}

// get request wuth woocoomerce api to get all products 
// const { page = 1 } = query;
// const perPage = 5;
// const response = await api.get(`products?per_page=${perPage}&page=${page}`);
// const products = response.data;
// const headerFooterData = await getHeaderFooter();
// const totalProducts = response.headers["x-wp-total"];
// const totalPages = Math.ceil(totalProducts / perPage);

export const getProductsData = async (query) => {
    const { page = 1 } = query;
    const perPage = 5;
    const response = await api.get(`products?per_page=${perPage}&page=${page}`);
    const products = response.data;
    const totalProducts = response.headers["x-wp-total"];
    const totalPages = Math.ceil(totalProducts / perPage);

    return {
        products,
        currentPage: parseInt(page),
        totalPages,
        totalProducts
    };
}
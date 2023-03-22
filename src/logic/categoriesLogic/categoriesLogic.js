import { api } from "../Woocommerce/WoocommerceAPI";

export const getAllcategories = (products = []) => {
    let allcategories = [];
    products.forEach(product => {
        product.categories?.forEach(categori => {
            if (!allcategories.includes(categori.name)) {
                allcategories.push(categori.name);
            }
        });
    });
    return allcategories;
}


export const getProductsInCategoryBySlug = async (categoryId) => {

    try {
        const response = await api.get('products', {
            category: categoryId,
        })
        return response;
    }
    catch (err) {
        console.log(err)
    }
}

export const getAllcategoriesInWooCommerce = async () => {
    const response = await api.get('products/categories', {
        per_page: 100, 
        hide_empty: true, 
      })
    return response;
}



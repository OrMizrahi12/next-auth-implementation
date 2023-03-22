export const filterByCategiries = (products, categories) => {
    return products.filter(product => {
        return product.categories?.some(categori => {
            return categories.includes(categori?.name);
        });
    });
};
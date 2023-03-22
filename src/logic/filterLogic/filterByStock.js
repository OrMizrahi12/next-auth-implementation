
export const showPeoductThatAreInStock = (products) => {
    return products.filter((product) => product.stock_quantity > 0);
};

export const orderByStockMaxToMin = (products) => {
    return products.sort((a, b) => b?.stock_quantity - a?.stock_quantity);
}

export const orderByStockMinToMax = (products) => {
    return products.sort((a, b) => a?.stock_quantity - b?.stock_quantity);
}
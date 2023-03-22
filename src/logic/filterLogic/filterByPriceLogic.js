export const sortProductsFromMinToMax = (products) => {
  return products.sort((a, b) => checkTheRelevantPrice(a) - checkTheRelevantPrice(b));
};

export const sortProductdFromMaxToMin = (products) => {
  return products.sort((a, b) => checkTheRelevantPrice(b) - checkTheRelevantPrice(a));
}

const checkTheRelevantPrice = (product) => {
  if (product?.sale_price) {
    return product.sale_price;
  }
  else if (product?.price) {
    return product?.price;
  }
  else {
    return product?.regular_price;
  }
}

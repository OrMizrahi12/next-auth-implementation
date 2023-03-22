export const filterByReviews = (products) => {
    return products.sort((a, b) => b?.average_rating - a?.average_rating);
}

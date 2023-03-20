export const getNavbarForLoggedInUser = (navbatData = []) => {

    let blockPages = ['register', 'login'];
    let navbar = preperNavbar(navbatData, blockPages);

    return navbar;
}
export const getNavbarForLoggedOutUser = (navbatData = []) => {

    let blockPages = ['my-account', 'logout', 'account-details'];
    let navbar = preperNavbar(navbatData, blockPages);

    return navbar;
}

export const preperNavbar = (navbatData = [], blockPages = []) => {

    let navbar = [];

    navbatData.forEach((item) => {
        if (!blockPages.includes(item.pageSlug)) {
            navbar.push(item);
        }
    });

    return navbar;
}
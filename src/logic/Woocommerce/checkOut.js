import { getCartForCreateOrder } from "../cartControll/cartControllHelper";
import { api } from "./WoocommerceAPI"

export const createOrder = async () => {

    const cartItems = getCartForCreateOrder();
    
    const orderData = {
        "payment_method": "bacs",
        "payment_method_title": "Direct Bank Transfer",
        "set_paid": true,
        "billing": {
            "first_name": "or",
            "last_name": "mizrahi",
            "address_1": "969 Market",
            "address_2": "",
            "city": "San Francisco",
            "state": "CA",
            "postcode": "94103",
            "country": "US",
            "email": "ormizrahi1610@gmail.com",
            "phone": "(555) 555-5555"
        },
        "shipping": {
            "first_name": "or",
            "last_name": "mizrahi",
            "address_1": "969 Market",
            "address_2": "",
            "city": "San Francisco",
            "state": "CA",
            "postcode": "94103",
            "country": "US"
        },
        "line_items": cartItems,
        "shipping_lines": [
            {
                "method_id": "flat_rate",
                "method_title": "Flat Rate",
                "total": "10.00"
            }
        ]
    }
    try {
        const result = await api.post('orders', orderData);

        return result;
    }
    catch (err) {
        console.log(err);
    }

}

export const checkIfStockExsist = async () => {

    try {
        const productsResponse = await api.get("products");
        const products = productsResponse.data;

        const cartItems = getCartForCreateOrder();

        let result = true;
        cartItems.forEach(cartItem => {

            products.forEach(product => {

                if (cartItem.id === product.id) {

                    if (cartItem.quantity > product.stock_quantity) {
                        result = false;
                        return;
                    }
                }
            })
        })
        return result;
    }
    catch {
        console.log("Sorry, somting wrong.")
    }
}


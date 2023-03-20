import { api } from "./WoocommerceAPI";


export const getCustomerById = async (id) => {
    const response = await api.get(`customers/${id}`);
    const customer = response.data;
    return customer;
};

export const getCustomerOrdersByEmail = async (email) => {
    const response = await api.get('orders', { customer_email: email });
    const orders = response.data;
    return orders;
};


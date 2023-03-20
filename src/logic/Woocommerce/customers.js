import { api } from "./WoocommerceAPI";


export const getCustomerById = async (id) => {
    const response = await api.get(`customers/${id}`);
    const customer = response.data;
    return customer;
};
export const getCustomerOrdersById = async (customerId) => {
    const response = await api.get('orders');
    const orders = response.data;
    return orders;
  };

export const getCustomerOrdersByEmail = async (email) => {
    if(email === undefined || !email) {
        return;
    }

    const response = await api.get('orders', { customer_email: email });
    const orders = response.data;
    return orders;
};
export const getAllOrders = async (email) => {
    let orders = [];
    let page = 1;
    let totalPages = 1;
  
    while (page <= totalPages) {
      const response = await api.get('orders', { page });
      orders = orders.concat(response.data);
      totalPages = parseInt(response.headers['x-wp-totalpages'], 10);
      page += 1;
    }

    const ordersByEmail = []; 

    orders.forEach(order => {
        if(order.billing.email === email) {
            ordersByEmail.push(order);
        }
    });

    return ordersByEmail;
  };




  
import { api } from "../Woocommerce/WoocommerceAPI";

export const getOrderById = async (orderId) => {
    try {
      const { data } = await api.get(`orders/${orderId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
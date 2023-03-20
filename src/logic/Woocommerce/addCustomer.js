import { api } from "./WoocommerceAPI";

export const registerNewCustomer = async (customer) => {

      const response = await api.post("customers", customer);
      const newCustomer = response.data;

      return newCustomer;
}
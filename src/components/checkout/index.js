import { checkIfStockExsist, createOrder } from "@/logic/Woocommerce/checkOut";
import { useContext } from "react";
import CartItemsTable from "../cart/CartItemsTable";
import { AppContext } from "../context/contect";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(AppContext);

  const view = async () => {
    const result = await checkIfStockExsist()

    if (result === true) {
      const response = await createOrder()
      console.log("Created order res:", response);
    }
  }

  return (
    <div>
      

      
      <CartItemsTable />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;

import { getAllOrders, getCustomerOrdersByEmail } from "@/logic/Woocommerce/customers";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "../../styles/orders.module.css";
import EachOrder from "./EachOrder";

const OrdersComp = ({orders}) => {
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const orderHistory = async () => {
    if (session !== undefined) {
      setLoading(true);
    }

    console.log(session?.session?.user?.email)
    const response = await getAllOrders(session?.session?.user?.email || undefined);
    console.log(response)
    if (response) {
      setOrdersHistory(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      orderHistory();
    }
  }, []);


  return (
    <div className={styles.container}>
      {
        loading ?
          (
            <div className={styles.orders}>
              {
                arr.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.loadingPost} ${styles.order}`}>
                  </div>
                ))
              }
            </div>
          ) :
          (
            <div className={styles.orders}>
              {ordersHistory.map((order, index) => (
                <EachOrder key={index} index={index} order={order} />
              ))}
            </div>
          )
      }
    </div>
  );
};

export default OrdersComp;




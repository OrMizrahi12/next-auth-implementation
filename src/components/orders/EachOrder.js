
import { getOrderById } from "@/logic/orderControll/orderControlHelper";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/orders.module.css";

const EachOrder = ({ order, index }) => {

    const [isSelected, setIsSelected] = useState(false);
    const handleOrderClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div
            key={order.id}
            className={styles.order}
            onClick={() => handleOrderClick(index)}
        >
            <p className={styles.orderNumber}>Order #{order.number}</p>
            <p className={styles.orderDate}>
                Order Date: {new Date(order.date_created).toLocaleDateString()}
            </p>
            <p className={styles.orderStatus}>Status: {order.status}</p>
            {isSelected && (
                <div className={styles.productDetails}>
                    {order.line_items.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))}
                    <Link href={`/order/${order.id}`}>
                        See more
                    </Link>
                    
                </div>
            )}
        </div>
    )
}

export default EachOrder


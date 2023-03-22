import { useContext } from "react";
import { AppContext } from "../context/contect";
import styles from "../../styles/cart.module.css";
import { getCartForCheckout } from "@/logic/cartControll/cartControllHelper";

const CartItemsTable = () => {

    const { cart, getTotalPrice, updateCart, removeFromCart } = useContext(AppContext);
    const uniqueCart = getCartForCheckout(cart || [])
    


    return (
        <div>
            <h1 className={styles["checkout-title"]}>Checkout</h1>
            <table className={styles["checkout-table"]}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {uniqueCart.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <div className={styles["product-container"]}>
                                    <img src={item?.images[0]?.src || ''} alt={item.name} className={styles["product-image"]} />
                                    <div>
                                    
                                        <p>{item.name}</p>
                                        <p>${Number(item.price).toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className={styles.btnRemoveProduct}>
                                </button>
                            </td>

                            <td>
                                {item.quantity}
                                <button
                                    disabled={item.stock_quantity <= item.quantity}
                                    className={styles.updateItemBtn}
                                    onClick={() => updateCart(item.id, false)}>
                                    +
                                </button>
                                <button
                                    disabled={item.quantity <= 1}
                                    className={styles.updateItemBtn}
                                    onClick={() => updateCart(item.id, true)}>
                                    -
                                </button>
                            </td>
                            <td>${Number(item.price).toFixed(2)}</td>
                            <td>
                                ${(item.quantity * Number(item.price)).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2"></td>
                        <td>Subtotal:</td>
                        <td>${getTotalPrice().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"></td>
                        <td>Total Quantity:</td>
                        <td>{cart.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default CartItemsTable;
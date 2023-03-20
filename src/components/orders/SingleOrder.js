import styles from '../../styles/singleOrder.module.css';

const SingleOrder = ({ order }) => {

    const navigateBack = () => {
        window.history.back();
    }

  return (
    <div className={styles.singleOrder}>
      <div className={styles.singleOrderHeader}>
        <h3>Order #{order.number}</h3>
        <p>{new Date(order.date_created).toLocaleDateString()}</p>
      </div>
      <div className={styles.singleOrderDetails}>
        {order.line_items.map((item) => (
          <div key={item.id} className={styles.singleOrderItem}>
            <p className={styles.singleOrderItemName}>{item.name}</p>
            <p className={styles.singleOrderItemQuantity}>
              Quantity: {item.quantity}
            </p>
            <p className={styles.singleOrderItemPrice}>Price: ${item.price}</p>
          </div>
        ))}
        <button className={styles.backBtn} onClick={navigateBack}> {`<<`} Back</button>
      </div>
    </div>
  );
};

export default SingleOrder;

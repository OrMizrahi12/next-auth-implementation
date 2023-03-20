import { useSession } from 'next-auth/react';
import styles from '../../styles/UserDetails.module.css';

const UserDetails = ({session}) => {

    return (
        session ? (
            <div className={styles.userDetails}>
                <img className={styles.userImage} src={session?.session?.user?.image || ""} alt="User Image" />
                <h2 className={styles.userName}>{session?.session?.user?.name || ""}</h2>
                <p className={styles.userEmail}>{session?.session?.user?.email || ""}</p>
            </div>
        ) : "NOT LOGGED IN"

    );
};

export default UserDetails;

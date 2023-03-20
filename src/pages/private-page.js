import styles from '../styles/Home.module.css'
import { useSession, signOut, getSession } from 'next-auth/react'

export default function PrivatePage() {
    const { data: session } = useSession()

    const handleLogout = async () => {
        await signOut()
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to my website</h1>
            <div className={styles.loggedin}>
                <p className={styles.message}>You are logged in</p>
                <p className={styles.message}>{session?.user?.name || ''}</p>
                <p className={styles.message}>{session?.user?.email || ''}</p>
                <button className={styles.logOutbutton} onClick={handleLogout}>Logout</button>
            </div>

        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: '/login-page',
                permanent: false
            }
        };
    }

    return {
        props: { session }
    };
};

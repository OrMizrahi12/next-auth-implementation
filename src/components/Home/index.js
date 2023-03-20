import { useSession } from 'next-auth/react'
import styles from '../../styles/Home.module.css'


const HomeComponent = () => {

    const { data: session } = useSession()

    const handleLogout = async () => {
      await signOut()
    }

    return (
        <div className={styles.container}>
            
            <h1 className={styles.title}>Welcome to my website</h1>
            {session ? (
                <div className={styles.loggedin}>
                    <p className={styles.message}>You are logged in</p>
                    <p className={styles.message}>{session?.user?.name || ''}</p>
                    <p className={styles.message}>{session?.user?.email || ''}</p>
                    <button className={styles.logOutbutton} onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p className={styles.message}>Please log in to continue</p>
            )}
        </div>
    )
}

export default HomeComponent;

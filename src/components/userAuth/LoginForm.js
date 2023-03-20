import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import styles from '../../styles/login.module.css';



const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { data: session } = useSession()

    const onSubmit = async (data) => {
        try {
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,

            });
            console.log(session)


        } catch (error) {
            console.log(error);
        }
    };

    const handlleGoogleLogin = async () => {
        signIn('google', { callbackUrl: "http://localhost:3000/account-details/" });
    }
    const handlleGitubLogin = () => {
        signIn('github', { callbackUrl: "http://localhost:3000/account-details/" });
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}

                <button type="submit" className={styles.button}>Log in</button>
            </form>
            <div className={styles.googleContainer}>
                <button onClick={handlleGoogleLogin} className={styles.googleButton}>
                    <span className={styles.googleIcon}></span>
                    <span className={styles.googleText}>Continue with Google</span>
                </button>
            </div>
            <div className={styles.googleContainer}>
                <button onClick={handlleGitubLogin} className={styles.googleButton}>
                    <span className={styles.githubIcon}></span>
                    <span className={styles.googleText}>Continue with Gitub</span>
                </button>
            </div>
        </div>
    );
}

export default LoginForm
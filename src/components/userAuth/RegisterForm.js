import styles from '../../styles/login.module.css'
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import { registerNewCustomer } from '@/logic/Woocommerce/addCustomer';


const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {

       const response = await registerNewCustomer(data);
       
       console.log(response)
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}

                <button type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm
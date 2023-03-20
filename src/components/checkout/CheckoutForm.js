// this component is form, react-hook-form is used to handle form data
import { useForm } from "react-hook-form";
import Styles from '../../styles/CheckoutForm.module.css'

const orderData = {
    "payment_method": "bacs",
    "payment_method_title": "Direct Bank Transfer",
    "set_paid": true,
    "billing": {
        "first_name": "or",
        "last_name": "mizrahi",
        "address_1": "969 Market",
        "address_2": "",
        "city": "San Francisco",
        "state": "CA",
        "postcode": "94103",
        "country": "US",
        "email": "ormizrahi1610@gmail.com",
        "phone": "(555) 555-5555"
    },
    "shipping": {
        "first_name": "or",
        "last_name": "mizrahi",
        "address_1": "969 Market",
        "address_2": "",
        "city": "San Francisco",
        "state": "CA",
        "postcode": "94103",
        "country": "US"
    },
}
const CheckoutForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {

        console.log(data);
    };
    return (
        <div>
            <form className={Styles.checkoutForm} onSubmit={handleSubmit(onSubmit)}>
                {/* orderData */}
                <label className={Styles.formLabel} htmlFor="first_name">First Name</label>
                <input className={Styles.formInput}  type="text" id="first_name" name="first_name" required {...register("first_name", { required: true })} />
                {errors.first_name && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="last_name">Last Name</label>
                <input className={Styles.formInput} type="text" id="last_name" name="last_name" required {...register("last_name", { required: true })} />
                {errors.last_name && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="address_1">Address 1</label>
                <input className={Styles.formInput} type="text" id="address_1" name="address_1" required {...register("address_1", { required: true })} />
                {errors.address_1 && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="address_2">Address 2</label>
                <input className={Styles.formInput} type="text" id="address_2" name="address_2" required {...register("address_2", { required: true })} />
                {errors.address_2 && <span>This field is required</span>}
                <label className={Styles.formLabel}  htmlFor="city">City</label>
                <input className={Styles.formInput} type="text" id="city" name="city" required {...register("city", { required: true })} />
                {errors.city && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="state">State</label>
                <input className={Styles.formInput} type="text" id="state" name="state" required {...register("state", { required: true })} />
                {errors.state && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="postcode">Postcode</label>
                <input className={Styles.formInput} type="text" id="postcode" name="postcode" required {...register("postcode", { required: true })} />
                {errors.postcode && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="country">Country</label>
                <input className={Styles.formInput} type="text" id="country" name="country" required {...register("country", { required: true })} />
                {errors.country && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="email">Email</label>
                <input className={Styles.formInput} type="text" id="email" name="email" required {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <label className={Styles.formLabel} htmlFor="phone">Phone</label>
                <input className={Styles.formInput} type="text" id="phone" name="phone" required {...register("phone", { required: true })} />
                {errors.phone && <span>This field is required</span>}
                <button className={Styles.btnSubmit} type="submit">Submit</button>

            </form>


        </div>
    )
}

export default CheckoutForm
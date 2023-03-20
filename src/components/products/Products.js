import EachProduct from "./EachProduct"
import style from '../../styles/Products.module.css'
import { useContext, useEffect } from "react"
import { AppContext } from "../context/contect"

const Products = ({ products = [] }) => {

    const { setCart } = useContext(AppContext);
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem('cart')
            if (storedCart !== null && storedCart !== undefined) {
                try {
                    setCart(JSON.parse(storedCart))
                } catch (error) {
                    console.error('Error parsing stored cart:', error)
                }
            }
        }
    }, [setCart])
    
    return (
        <>
        { products && 
            <div className={style.container}>
                <div className={style.productsContainer}>
                    {
                        products.map(product => <EachProduct key={product.id} product={product} />)
                    }
                </div>
            </div>
        }
        </>
    )
}

export default Products

// import EachProduct from "./EachProduct"
// import style from '../../styles/Products.module.css'
// import { useContext, useEffect } from "react"
// import { AppContext } from "../context/contect"

// const Products = ({ products = [] }) => {

//     const { setCart } = useContext(AppContext);
//     if(!products){
//         return; 
//     }
    
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const storedCart = localStorage.getItem('cart')
//             if (storedCart !== null && storedCart !== undefined) {
//                 try {
//                     setCart(JSON.parse(storedCart))
//                 } catch (error) {
//                     console.error('Error parsing stored cart:', error)
//                 }
//             }
//         }
//     }, [])
    

//     return (
//         <div className={style.container}>

//             <div className={style.productsContainer}>
//                 {
//                     products.map(product => <EachProduct key={product.id} product={product} />)
//                 }
//             </div>
//         </div>

//     )
// }

// export default Products
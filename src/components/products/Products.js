import EachProduct from "./EachProduct"
import style from '../../styles/Products.module.css'
import { useContext, useEffect } from "react"
import { AppContext } from "../context/contect"
import FiltersComponent from "../filters"

const Products = ({ products = [] }) => {

    const { setCart ,productsShopData, setProductsShopData, productsShopDataUpdated, setProductsShopDataUpdated} = useContext(AppContext);
    
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
    
    useEffect(() => {
        if(typeof window !== "undefined"){
            setProductsShopData(products || []);
        }
    },[productsShopData, productsShopDataUpdated]);
    
    return (
        <>
        { productsShopData && 
            <div className={style.container}>
                <FiltersComponent />
                <div className={style.productsContainer}>
                    {
                        productsShopData.map(product => <EachProduct key={product.id} product={product} />)
                    }
                </div>
            </div>
        }
        </>
    )
}

export default Products


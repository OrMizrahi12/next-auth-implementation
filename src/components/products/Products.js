import EachProduct from "./EachProduct"
import style from '../../styles/Products.module.css'
import { useContext, useEffect } from "react"
import { AppContext } from "../context/contect"
import FiltersComponent from "../filters"


const Products = ({ products = [] }) => {

    console.log('This is from c:', products)
    const {
        setCart,
        productsShopData,
        setProductsShopData,
        productsShopDataUpdated,
        setProductsShopDataUpdated,
        setCategoriesArray
    } = useContext(AppContext);

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
        if (typeof window !== "undefined") {
            setProductsShopData(productsShopData.length > 0 ? productsShopData : products || []);
        }
    }, [productsShopDataUpdated]);

    useEffect(() => { }, [])



    return (
        <>
            {productsShopData &&
                <div className={style.container}>
                    <FiltersComponent products={products} />
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



import React, { useContext, useState } from 'react'
import { AppContext } from '../context/contect'
import Style from '../../styles/FilterByStock.module.css'
import { orderByStockMaxToMin, orderByStockMinToMax, showPeoductThatAreInStock } from '@/logic/filterLogic/filterByStock';
const FilterByStock = ({ products }) => {

    const { setProductsShopData, productsShopData, setProductsShopDataUpdated, productsShopDataUpdated } = useContext(AppContext)
    const [minToMax, setMinToMax] = useState(null);

    const minToMaxHandler = () => {
        setMinToMax(true);

        const productsUnderFilter = orderByStockMinToMax(productsShopData);
        console.log(productsUnderFilter)
        setProductsShopData(productsUnderFilter);
        setProductsShopDataUpdated(!productsShopDataUpdated);
    }
    const maxToMinHandler = () => {
        setMinToMax(false);

        const productsUnderFilter = orderByStockMaxToMin(productsShopData);
        setProductsShopData(productsUnderFilter);
        setProductsShopDataUpdated(!productsShopDataUpdated);
    }
    const onlyInStockHandler = (e) => {
        

        if (e.target.checked === false) {
            setProductsShopData(products);
            setProductsShopDataUpdated(!productsShopDataUpdated);
        }
        else {
            const productsUnderFilter = showPeoductThatAreInStock(productsShopData);
            setProductsShopData(productsUnderFilter);
            setProductsShopDataUpdated(!productsShopDataUpdated);
        }
    }

    return (

        <div>
            <p>Filter by stock</p>
            <div className={Style.filterByStockWrapper}>
                <div className={Style.filterByStock}>
                    <label>Min to max</label>
                    <input
                        type={'radio'}
                        onChange={() => minToMaxHandler()}
                        checked={minToMax}
                        value="From min to max"
                    />
                    <label>Max to min</label>
                    <input
                        type={'radio'}
                        onChange={() => maxToMinHandler()}
                        checked={minToMax === false}
                        value="From max to min"
                    />
                    <hr />
                    <label>only in stock</label>
                    <input type={'checkbox'} onChange={e => onlyInStockHandler(e)} />
                </div>
            </div>
        </div>
    )
}


export default FilterByStock;
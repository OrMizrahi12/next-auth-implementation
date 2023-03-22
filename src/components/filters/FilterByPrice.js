import { sortProductdFromMaxToMin, sortProductsFromMinToMax } from '@/logic/filterLogic/filterByPriceLogic';
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/contect'
import Style from '../../styles/FilterByPrice.module.css'
const FilterByPrice = () => {

    const { setProductsShopData, productsShopData, setProductsShopDataUpdated, productsShopDataUpdated } = useContext(AppContext)
    const [minToMax, setMinToMax] = useState(null);

    const minToMaxHandler = () => {
        setMinToMax(true);

        const productsUnderFilter = sortProductsFromMinToMax(productsShopData);
        console.log(productsUnderFilter)
        setProductsShopData(productsUnderFilter);
        setProductsShopDataUpdated(!productsShopDataUpdated);
    }
    const maxToMinHandler = () => {
        setMinToMax(false);

        const productsUnderFilter = sortProductdFromMaxToMin(productsShopData);
        console.log(productsUnderFilter)
        setProductsShopData(productsUnderFilter);
        setProductsShopDataUpdated(!productsShopDataUpdated);
    }

    return (
        <div className={Style.filterByPriceWrapper}>
            <div className={Style.filterByPrice}>
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
            </div>
        </div>
    )
}

export default FilterByPrice
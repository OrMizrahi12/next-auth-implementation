import { getAllcategories } from "@/logic/categoriesLogic/categoriesLogic";
import { filterByCategiries } from "@/logic/filterLogic/filterBycategoriesLogic";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/contect"
import Style from '../../styles/FilterByCategories.module.css'

const FilterByCategories = ({ products }) => {

  const {
    setProductsShopData,
    setProductsShopDataUpdated,
    productsShopDataUpdated,
    setCategoriesArray
  } = useContext(AppContext)

  const [allcategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const categories = getAllcategories(products);
      setCategoriesArray(categories)
      setAllCategories(categories);
    }
  }, [])


  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter(category => category !== value));
    }

  }

  useEffect(() => {
    console.log(selectedCategories);
    const productsUnderFilter = filterByCategiries(products, selectedCategories);
    console.log(productsUnderFilter);
    setProductsShopData(productsUnderFilter);
    setProductsShopDataUpdated(!productsShopDataUpdated);
  }, [selectedCategories]);

  return (
    <div className={Style.container}>
      <div className={Style.heading}>Filter By Categories</div>
      <div className={Style.categories}>
        {allcategories.map(category => (
          <div key={category} className={Style.category}>
            <input onChange={e => handleCategoryChange(e)} value={category} type={'checkbox'} id={category} className={Style.checkbox} />
            <label htmlFor={category} className={Style.label}>{category}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterByCategories

import FilterByCategories from "./FilterByCategories";
import FilterByPrice from "./FilterByPrice";
import FilterByStock from "./FilterByStock";
import style from '../../styles/FiltersGeneral.module.css'
const FiltersComponent = ({ products }) => {

    return (
        <div>

            <div className={style.filtersWrapper}>
                <FilterByPrice />
                <FilterByStock products={products} />
            </div>
            <FilterByCategories products={products} />
        </div>
    );
}

export default FiltersComponent;
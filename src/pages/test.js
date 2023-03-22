import { getAllcategoriesInWooCommerce, getProductsInCategoryBySlug } from "@/logic/categoriesLogic/categoriesLogic"
import { api } from "@/logic/Woocommerce/WoocommerceAPI"


export default function Test() {

    const getProductsByCategories = async () => {
        const result = await getAllcategoriesInWooCommerce();
        console.log(result)
    }

    return <div>
        <button value={"Get"} onClick={() => getProductsByCategories()} />
    </div>
}

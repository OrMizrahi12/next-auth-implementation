import Layout from "@/components/Layout/Layout";
import { getHeaderFooter } from "@/utils/layout/headerFooterProvider";
import { getProductsBySlug } from "@/logic/productsControll/productControllHelper";
import {  getProductsInCategoryBySlug } from "@/logic/categoriesLogic/categoriesLogic";
import Products from "@/components/products/Products";
import { api } from "@/logic/Woocommerce/WoocommerceAPI";


export default function Category({ products, headerFooter }) {

    console.log("This is!",products)

    return (
        <Layout headerFooterData={headerFooter}>
            <Products products={products} />
            
        </Layout>
    );
}

export async function getServerSideProps({ params }) {

    const { slug } = params;
    const {data: products} = await getProductsInCategoryBySlug(slug)
    const { data: headerFooterData } = await getHeaderFooter();

    return {
        props: {
            products: products ?? {} ,
            headerFooter: headerFooterData ?? {},
        },
    };
}
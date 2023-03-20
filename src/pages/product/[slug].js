import Layout from "@/components/Layout/Layout";
import SingleProduct from "@/components/products/SingleProduct";
import { getHeaderFooter } from "@/utils/layout/headerFooterProvider";
import { getProductsBySlug } from "@/logic/productsControll/productControllHelper";

export default function Product({ products, headerFooter }) {

    return (
        <Layout headerFooterData={headerFooter}>
            <SingleProduct product={products} />
        </Layout>
    );


}

export async function getServerSideProps({ params }) {

    const { slug } = params;
    const { data: product } = await getProductsBySlug(slug);
    const {data: headerFooterData} = await getHeaderFooter();


    return {
        props: {
            products : product.length > 0 ? product[0] : {},
            headerFooter: headerFooterData ?? {}, 
        },
    };
}
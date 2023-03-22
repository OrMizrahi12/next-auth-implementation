import Layout from "@/components/Layout/Layout";
import WishListComponent from "@/components/wishList";
import { getAllcategoriesInWooCommerce } from "@/logic/categoriesLogic/categoriesLogic";
import { getHeaderFooter } from "@/utils/layout/headerFooterProvider";

export default function WishList({ headerFooterData, categories }) {
    return (
        <Layout headerFooterData={headerFooterData} categories={categories}>
         <WishListComponent />
        </Layout>
    );
}


export async function getStaticProps() {

    const headerFooterData = await getHeaderFooter();
    const {data: categories} = await getAllcategoriesInWooCommerce();

    return {
        props: {
            headerFooterData: headerFooterData.data,
            categories: categories || []
        },
    };
}
import Layout from "@/components/Layout/Layout";
import WishListComponent from "@/components/wishList";
import { getHeaderFooter } from "@/utils/layout/headerFooterProvider";

export default function WishList({ headerFooterData }) {
    return (
        <Layout headerFooterData={headerFooterData}>
         <WishListComponent />
        </Layout>
    );
}


export async function getStaticProps() {

    const headerFooterData = await getHeaderFooter();

    return {
        props: {
            headerFooterData: headerFooterData.data
        },
    };
}
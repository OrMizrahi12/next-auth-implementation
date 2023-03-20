import Layout from "@/components/Layout/Layout";
import SingleProduct from "@/components/products/SingleProduct";
import { getHeaderFooter } from "@/utils/layout/headerFooterProvider";
import { getProductsBySlug } from "@/logic/productsControll/productControllHelper";
import { getOrderById } from "@/logic/orderControll/orderControlHelper";
import SingleOrder from "@/components/orders/SingleOrder";

export default function Product({ order, headerFooter }) {

    console.log(order)
    return (
        <Layout headerFooterData={headerFooter}>
            <SingleOrder order={order} />
        </Layout>
    );


}
export async function getServerSideProps({ params}) {
    const { slug } = params;
    const order = await getOrderById(slug);
    const { data: headerFooterData } = await getHeaderFooter();
  
    return {
      props: {
        order,
        headerFooter: headerFooterData ?? {},
      },
    };
  }
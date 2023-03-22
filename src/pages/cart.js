import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import HomeComponent from '@/components/Home'
import CartItems from '@/components/cart';
import { getAllcategoriesInWooCommerce } from '@/logic/categoriesLogic/categoriesLogic';

export default function Cart({ headerFooterData, categories }) {

  return (
    <Layout headerFooterData={headerFooterData} categories={categories}>
    <CartItems />
    </Layout>
  )

}

export async function getServerSideProps() {
  const headerFooterData = await getHeaderFooter();
  const {data: categories} = await getAllcategoriesInWooCommerce();


  return {
    props: {
      headerFooterData: headerFooterData.data,
      categories: categories || []
    },
  };
}
import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import HomeComponent from '@/components/Home'
import { getAllcategoriesInWooCommerce } from '@/logic/categoriesLogic/categoriesLogic';

export default function Home({ headerFooterData, categories }) {

  return (
    <Layout headerFooterData={headerFooterData} categories={categories}>
      <HomeComponent />
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
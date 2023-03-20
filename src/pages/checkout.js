import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import HomeComponent from '@/components/Home'
import Checkout from '@/components/checkout';

export default function checkout({ headerFooterData }) {

  return (
    <Layout headerFooterData={headerFooterData}>
     <Checkout/>
    </Layout>
  )

}

export async function getServerSideProps() {
  const headerFooterData = await getHeaderFooter();

  return {
    props: {
      headerFooterData: headerFooterData.data
    },
  };
}
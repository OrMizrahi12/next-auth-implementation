import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import HomeComponent from '@/components/Home'
import CartItems from '@/components/cart';

export default function Cart({ headerFooterData }) {

  return (
    <Layout headerFooterData={headerFooterData}>
    <CartItems />
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
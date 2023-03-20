import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import HomeComponent from '@/components/Home'

export default function Home({ headerFooterData }) {

  return (
    <Layout headerFooterData={headerFooterData}>
      <HomeComponent />
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
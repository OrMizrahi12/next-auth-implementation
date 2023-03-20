import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import OrdersComp from '@/components/orders';
import { getSession, useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Orders({ headerFooterData }) {

  
  return (
    <Layout headerFooterData={headerFooterData}>
     
      <OrdersComp />

    </Layout>
  )

}

export async function getServerSideProps({ req }) {

  const session = await getSession({ req });
  const headerFooterData = await getHeaderFooter();

  return {
    props: {
      headerFooterData: headerFooterData.data,
      session
    },
  };
}



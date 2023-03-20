import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import OrdersComp from '@/components/orders';
import { getSession, useSession } from 'next-auth/react';
import { useState } from 'react';
import { api } from '@/logic/Woocommerce/WoocommerceAPI';

export default function Orders({ headerFooterData, orders }) {

  
  return (
    <Layout headerFooterData={headerFooterData}>
     
      <OrdersComp orders={orders}/>

    </Layout>
  )

}

export async function getServerSideProps({ req }) {

  const session = await getSession({ req });
  const headerFooterData = await getHeaderFooter();
  const orders = await api.get('orders', {   per_page: "100" });

  return {
    props: {
      headerFooterData: headerFooterData.data,
      session,
      orders: orders.data
    },
  };
}



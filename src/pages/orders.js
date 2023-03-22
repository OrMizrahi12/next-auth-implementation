import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import OrdersComp from '@/components/orders';
import { getSession, useSession } from 'next-auth/react';
import { useState } from 'react';
import { api } from '@/logic/Woocommerce/WoocommerceAPI';
import { getAllcategoriesInWooCommerce } from '@/logic/categoriesLogic/categoriesLogic';

export default function Orders({ headerFooterData, orders , categories}) {

  
  return (
    <Layout headerFooterData={headerFooterData} categories={categories}>
     
      <OrdersComp orders={orders}/>

    </Layout>
  )

}

export async function getServerSideProps({ req }) {

  const session = await getSession({ req });
  const headerFooterData = await getHeaderFooter();
  const orders = await api.get('orders', {   per_page: "100" });
  const {data: categories} = await getAllcategoriesInWooCommerce();


  return {
    props: {
      headerFooterData: headerFooterData.data,
      session,
      orders: orders.data,
      categories: categories || []
    },
  };
}



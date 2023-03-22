import Layout from "@/components/Layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import Products from "@/components/products/Products";
import { getHeaderFooter } from "@/utils/layout/headerFooterProvider";
import { getProductsData } from "@/logic/productsControll/productControllHelper";
import { useRouter } from "next/router";
import { getAllcategoriesInWooCommerce } from "@/logic/categoriesLogic/categoriesLogic";


export default function Shop({ products, headerFooterData, currentPage, totalPages,categories }) {
console.log("Iis assawm!", categories)
  const router = useRouter();
  const handlePageChange = (pageNumber) => {
    router.push({
      pathname: '/shop',
      query: { page: pageNumber },
    });
  }

  return (
    <div>
      <Layout headerFooterData={headerFooterData} categories={categories} >
        <Products products={products} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query }) {

  const headerFooterData = await getHeaderFooter();
  const {data: categories} = await getAllcategoriesInWooCommerce();
  const { products, currentPage, totalPages, totalProducts } = await getProductsData(query);

  return {
    props: {
      products,
      headerFooterData: headerFooterData.data,
      currentPage,
      totalPages,
      totalProducts,
      categories: categories || []
    },
  };
}


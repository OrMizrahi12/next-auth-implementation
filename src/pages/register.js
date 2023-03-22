
import RegisterForm from '@/components/userAuth/RegisterForm';
import Layout from '@/components/Layout/Layout';
import { getHeaderFooter } from '@/utils/layout/headerFooterProvider';
import { getAllcategoriesInWooCommerce } from '@/logic/categoriesLogic/categoriesLogic';


export default function RegisterPage({ headerFooterData , categories}) {
    return (
        <Layout headerFooterData={headerFooterData} categories={categories}>
            <RegisterForm />
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



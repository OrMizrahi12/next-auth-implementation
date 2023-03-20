import styles from '../styles/login.module.css'
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import RegisterForm from '@/components/userAuth/RegisterForm';
import Layout from '@/components/Layout/Layout';
import { getHeaderFooter } from '@/utils/layout/headerFooterProvider';


export default function RegisterPage({ headerFooterData }) {
    return (
        <Layout headerFooterData={headerFooterData}>
            <RegisterForm />
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



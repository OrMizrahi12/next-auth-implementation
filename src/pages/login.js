import { signOut, signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from '../styles/login.module.css'
import LoginForm from "@/components/userAuth/LoginForm";
import Layout from "@/components/Layout/Layout";
import { getHeaderFooter } from "@/utils/layout/headerFooterProvider";
const jwt = require('jsonwebtoken');


export default function LoginPage({ headerFooterData }) {

  return (
    <Layout headerFooterData={headerFooterData}>
      <LoginForm />
    </Layout>

  );
}

export async function getServerSideProps() {
  const headerFooterData = await getHeaderFooter();

  return {
    props: {
      headerFooterData: headerFooterData.data
    },
  };
}


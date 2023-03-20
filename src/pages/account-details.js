import { getHeaderFooter } from '@/utils/layout/headerFooterProvider'
import Layout from '@/components/Layout/Layout'
import AccountDetailsComp from '@/components/accountDetails';
import { getSession, useSession } from 'next-auth/react';

export default function AccountDetails({ headerFooterData }) {

  // Session
  const { data: session } = useSession();

  return (
    <Layout headerFooterData={headerFooterData}>
      <AccountDetailsComp session={session} />
    </Layout>
  )

}

export async function getServerSideProps({ req }) {
  const headerFooterData = await getHeaderFooter();

  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: {
      headerFooterData: headerFooterData.data,
      session
    },
  };
}
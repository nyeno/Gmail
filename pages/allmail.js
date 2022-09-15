import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";
import Layout from "../components/Layout";
import PageLayout from "../components/PageLayout";

export default function Home() {
  const { theme, setTheme } = useTheme("light");
  return (
    <Layout>
      <PageLayout>
      <div>
      <Head>
        <title>Gmail</title>
        <meta name="description" content="Gmail Clone" />
        <link
          rel="icon"
          href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
      </Head>
      <div className="h-screen p-12">
        <main>All Mail</main>
      </div>
        </div>
      </PageLayout>
       
    </Layout>
    
  );
}

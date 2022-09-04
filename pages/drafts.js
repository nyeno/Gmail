import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";
import MailControls from "../components/MailControl";

export default function Home() {
  const { theme, setTheme } = useTheme("light");
  console.log(theme);
  return (
    <div>
      <Head>
        <title>Gmail</title>
        <meta name="description" content="Gmail Clone" />
        <link
          rel="icon"
          href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
      </Head>
      <div className="h-screen dark:bg-black bg-gray-100">
      <div className="dark:bg-black bg-white rounded-2xl mr-8 overflow-hidden">
        <MailControls />
        <div className="pb-2 overflow-auto h-[calc(100vh-8rem)]">
     
      
        </div>
      </div>
      </div>
    </div>
  );
}

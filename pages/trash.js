import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme("light");
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
        <main>Trash</main>
      </div>
    </div>
  );
}

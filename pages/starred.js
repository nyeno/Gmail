import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PageLayout from "../components/PageLayout";
import Layout from "../components/Layout";

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
      <div className="h-screen dark:bg-black bg-gray-100">
      <main className="align-middle px-10 py-12 border border-[#DADCE0] rounded h-5/12 w-5/12 m-auto">
          <section>
              <div className="flex justify-center mb-8">
                <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png" width={75} height={28} />
              </div>
              <p className="text-2xl text-center">Hi Nyenooke</p>
              <div className="flex justify-center mb-8 mt-2 border rounded-full w-fit px-2 py-px m-auto opacity-80">
                <Image
                  src="https://lh3.googleusercontent.com/ogw/AOh-ky3IVm2VGZwuLXpBTPV86N6o3QgmE6tuaCwo6qNqPg=s64-c-mo"
                  alt="User Image"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <p className="ml-2 text-sm font-medium tracking-wide">enonyenooke@gmail.com</p>
                <KeyboardArrowDownIcon fontSize="small"/>
              </div>
              <form className="my-6">
                  <p>To continue, verify it's you</p>
                  <input type="text" className="border border-[#DADCE0] rounded px-2 py-2 w-full mt-8" placeholder="Enter your password"/>
                  <div className="my-2">
                    <input type="checkbox" id="password" name="password" value="Password" className="mr-4 h-4 w-4 "/>
                    <label htmlFor="password" className="text-xs align-top "> Show Password</label>
                  </div>
                  
                  <div className="my-10 flex justify-between items-center">
                    <p className="text-blue-600 text-sm font-medium">Forgot Password?</p>
                    <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded self-center">Next</button>
                 </div>
              </form>
              
          </section>
      </main>
      </div>
    </div>
    </PageLayout>
    </Layout>
   
  );
}

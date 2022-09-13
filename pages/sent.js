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
      <main className="align-middle p-8 border border-[#DADCE0] rounded h-4/6 w-2/6 m-auto">
          <section>
              <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png" width={75} height={28} className=""/>
              <p className="text-2xl">Sign in
                <span className="block text-sm my-4">to continue to Gmail</span>
              </p>
              <form className="my-6">
                  <input type="text" className="border border-[#DADCE0] rounded px-2 py-2 text-sm " placeholder="Email or phone"/>
                  <p className="text-blue-600 text-sm font-medium">Forgot email?</p>
                  <p className="text-sm">Not your computer? Use Guest mode to sign in privately
                    <span className="text-blue-600 text-sm font-medium block">Learn more</span>
                  </p>
                  <div className=" col-span-2 flex justify-between items-center">
                    <p className="text-blue-600 text-sm font-medium">Create account</p>
                    <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded self-center">Next</button>
                 </div>
              </form>
              
          </section>
        </main>
      </div>
    </div>
  );
}

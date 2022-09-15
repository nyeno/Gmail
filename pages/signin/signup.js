import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";


const  SignUp = () => {
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
      <main className="flex justify-around p-8 border border-[#DADCE0] rounded h-5/6 w-4/6 m-auto mt-16">
        <section>
            <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png" width={75} height={28} />
            <p className="text-2xl">Create your Google Account
            <span className="block text-sm my-4">to continue to Gmail</span>
            </p>
            <form className="grid grid-cols-2 gap-x-4 gap-y-8 my-6">
                <input type="text" className="border border-[#DADCE0] rounded px-2 py-1.5 text-xs" placeholder="First name"/>
                <input type="text" className="border border-[#DADCE0] rounded px-2 py-1.5 text-xs" placeholder="Last name"/>
                <div className="flex justify-between border border-[#DADCE0] rounded px-2 py-1.5 text-xs col-span-2">
                <input type="text" className="text-xs" placeholder="Username"/>
                <p>@gmail.com</p>
                </div>
                <input type="text" className="border border-[#DADCE0] rounded px-2 py-1.5 text-xs" placeholder="Password"/>
                <input type="text" className="border border-[#DADCE0] rounded px-2 py-1.5 text-xs" placeholder="Confirm"/>
                <div>
                <input type="checkbox" id="password" name="password" value="Password" className="mr-4 h-4 w-4"/>
                <label htmlFor="password" className="text-xs align-top"> Show Password</label>
                </div>
                <div className=" col-span-2 flex justify-between items-center">
                <p className="text-blue-600 text-sm font-medium">Sign in instead</p>
                <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded self-center">Next</button>
            </div>
            </form>
            
        </section>
        <section>
            <Image src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" width={300} height={300} className="self-center"/>
        </section>
        </main> 
    </div> 
   
    );
}
 
export default SignUp
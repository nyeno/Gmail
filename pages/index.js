import Head from 'next/head'
import { useTheme } from 'next-themes'
import Image from 'next/image'

import Checkbox from '@mui/material/Checkbox';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

export default function Home() {
  const {theme, setTheme} = useTheme('light')
  console.log(theme)
  return (
   
    <div>
      <Head>
        <title>Gmail</title>
        <meta name="description" content="Gmail Clone" />
        <link rel="icon" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" />
      </Head>
      <div className='h-screen dark:bg-black bg-gray-100'>
        <nav className='flex items-center'>
          <MenuIcon />
          <Image src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt='Gmail Logo' width={90} height={30}/>
          <form>
            <SearchIcon />
            <input type="text" />
            <TuneIcon />
          </form> 
          <HelpOutlineIcon />
          <SettingsIcon />
          <AppsIcon />
        </nav>
        <nav>
          
        </nav>
      </div>

    </div>
  )
}

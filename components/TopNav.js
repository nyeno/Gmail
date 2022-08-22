import Image from 'next/image'


import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';


const TopNav = () => {
    return ( 
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
     );
}
 
export default TopNav;
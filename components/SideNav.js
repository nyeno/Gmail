import Link from 'next/link'

import InboxIcon from '@mui/icons-material/Inbox';
import StarBorder from '@mui/icons-material/StarBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const SideNav = () => {
    return ( 
        <nav className='w-14'>
            <Link href="/">
                <a className='hover:bg-sky-200/50 space-x-1.5'>
                    <InboxIcon/> 
                    <span>Inbox</span>
                </a>
            </Link>
            <Link href="/starred">
                <a><StarBorder/> Starred</a>
            </Link>
            <Link href="/sent">
                <a><SendOutlinedIcon/> Sent</a>
            </Link>
            <Link href="/drafts">
                <a><InsertDriveFileOutlinedIcon/> Drafts</a>
            </Link>
            <Link href="/scheduled">
                <a><ScheduleSendOutlinedIcon/> Scheduled</a>
            </Link>
            <Link href="/allmail">
                <a> <EmailOutlinedIcon/> All Mail</a>
            </Link>
            <Link href="/trash">
                <a><DeleteOutlinedIcon /> Trash</a>
            </Link>
      </nav>
     );
}
 
export default SideNav;
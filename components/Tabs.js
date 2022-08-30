import InboxIcon from '@mui/icons-material/Inbox';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Tabs = () => {
    return ( 
        <div>
            <button className='w-1/5 hover:bg-slate-100 p-4 text-left'>
                <InboxIcon fontSize='small'/>
                <span className='ml-4 text-slate-700 font-medium'>Primary</span>
            </button>
            <button className='w-1/5 hover:bg-slate-100 p-4 text-left'>
                <SellOutlinedIcon fontSize='small'/>    
                <span className='ml-4 text-slate-700 font-medium'>Promotions</span>
            </button>
            <button className='w-1/5 hover:bg-slate-100 p-4 text-left'>
                <PeopleOutlineOutlinedIcon fontSize='small'/>
                <span className='ml-4 text-slate-700 font-medium'>Social</span>
            </button>
            <button className='w-1/5 hover:bg-slate-100 p-4 text-left'>
                <InfoOutlinedIcon fontSize='small'/>
                <span className='ml-4 text-slate-700 font-medium'>Updates</span>
            </button>
        </div>
     );
}
 
export default Tabs;
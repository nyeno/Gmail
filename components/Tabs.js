import InboxIcon from '@mui/icons-material/Inbox';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Tabs = () => {
    return ( 
        <div>
            <button>
                <InboxIcon />
                <span>Primary</span>
            </button>
            <button>
                <SellOutlinedIcon />    
                <span>Promotions</span>
            </button>
            <button>
                <PeopleOutlineOutlinedIcon />
                <span>Social</span>
            </button>
            <button>
                <InfoOutlinedIcon />
                <span>Updates</span>
            </button>
        </div>
     );
}
 
export default Tabs;
import { Checkbox } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Controls = ({children}) => {
    return ( 
        <div>
            <form>
                <Checkbox />
                <ArrowDropDownIcon />
                <RefreshIcon />
                <MoreVertIcon />
            </form>
            {children}
        </div>
     );
}
 
export default Controls;
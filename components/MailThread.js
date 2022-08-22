import StarBorder from "@mui/icons-material/StarBorder";
import { Checkbox } from "@mui/material";
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const MailThread = () => {
    return ( 
        <div className="flex">
            <Checkbox />
            <StarBorder />
            <p>Mail Sender</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="controls"> 
                <ArchiveIcon />
                <DeleteOutlinedIcon />
                <MailOutlinedIcon />
                <AccessTimeOutlinedIcon />
            </div>
            <p>Aug 21</p>
        </div>
     );
}
 
export default MailThread;
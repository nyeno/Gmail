import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MailControls = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div>
        <ArrowBackIcon />
        <ArchiveOutlinedIcon />
        <AddTaskRoundedIcon />
        <MoreVertIcon />
      </div>
    
      <div className="mr-12 text-slate-500 text-xs mt-4">
        <span>1-50 </span>
        <span> of </span>
        <span> 1000</span>
        <ArrowBackIosIcon className="text-sm ml-4"/>
        <ArrowForwardIosIcon className="text-sm ml-4"/>
      </div>
      
    </div>
  );
};

export default MailControls;

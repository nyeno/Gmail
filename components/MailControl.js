import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const MailControls = ({ children }) => {
  return (
    <div className="flex justify-between mt-4 mb-8 ">
      <div className="space-x-6 text-xs">
        <ArrowBackIcon className="mr-4" fontSize="small"/>
       
        <ArchiveOutlinedIcon fontSize="small"/>
        <ReportGmailerrorredRoundedIcon fontSize="small"/>
        <span className="border-gray-300/50 border-r pr-4 py-px"><DeleteOutlineRoundedIcon fontSize="small" /></span>
        

        <MailOutlineRoundedIcon fontSize="small"/>
        <ScheduleRoundedIcon fontSize="small"/>
        <span className="border-gray-300/50 border-r pr-4 py-px"><AddTaskRoundedIcon fontSize="small"/></span>
        

        <DriveFileMoveOutlinedIcon fontSize="small"/>
        <LabelOutlinedIcon fontSize="small"/>
        <MoreVertOutlinedIcon fontSize="small"/>
      </div>

      <div className="mr-4 text-slate-500 text-xs">
        <span> 2 </span>
        <span> of </span>
        <span> 1000</span>
        <ArrowBackIosIcon className="text-sm ml-4" />
        <ArrowForwardIosIcon className="text-sm ml-4" />
      </div>
    </div>
  );
};

export default MailControls;

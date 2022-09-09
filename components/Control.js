import { Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Controls = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div>
        <Checkbox />
        <ArrowDropDownIcon />
        <RefreshIcon />
        <MoreVertIcon />
      </div>

      <div className="mr-12 text-slate-500 text-xs mt-4">
        <span>1-50 </span>
        <span> of </span>
        <span> 1000</span>
        <ArrowBackIosIcon className="text-sm ml-4" />
        <ArrowForwardIosIcon className="text-sm ml-4" />
      </div>
    </div>
  );
};

export default Controls;

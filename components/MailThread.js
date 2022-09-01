import StarBorder from "@mui/icons-material/StarBorder";
import { Checkbox } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Truncated } from "../utils";
import { useState } from "react";

const MailThread = () => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`hover:drop-shadow-l flex items-center justify-between pr-5 cursor-pointer ${
        isHover ? "border-b-4 border-grey-900" : "border-b-2 border-grey-100"
      }`}
    >
      <div className="flex items-center justify-between w-5/6">
        <div className="flex items-center ">
          <Checkbox />
          <StarBorder />
          <p className="text-slate-800 font-medium ml-2 text-sm">Mail Sender</p>
        </div>
        <div className="w-4/5">
          <Truncated val={130} className="text-slate-500 text-sm font-size" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Truncated>
        </div>
      </div>
      <div className="controls">
        <p className={`${isHover ? "hidden" : "flex"} font-medium text-slate-600 text-sm` }>11:32 AM</p>
        <div className={`${isHover ? "flex" : "hidden"}`}>
          <ArchiveIcon />
          <DeleteOutlinedIcon />
          <MailOutlinedIcon />
          <AccessTimeOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default MailThread;

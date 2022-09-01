import { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("primary");

  const changeTab = (type) => {
    setActiveTab(type);
  };

  return (
    <div>
      <button
        onClick={() => changeTab("primary")}
        className={`w-1/5 hover:bg-slate-100 p-4 text-left ${
          activeTab === "primary" && "border-b-4 border-blue-600"
        }`}
      >
        <InboxIcon
          className={`${
            activeTab === "primary" ? "text-blue-600" : "text-slate-700"
          }`}
          fontSize="small"
        />
        <span
          className={`ml-4 ${
            activeTab === "primary" ? "text-blue-600" : "text-slate-700"
          } font-medium text-sm`}
        >
          Primary
        </span>
      </button>
      <button
        onClick={() => changeTab("promotions")}
        className={`w-1/5 hover:bg-slate-100 p-4 text-left ${
          activeTab === "promotions" && "border-b-4 border-blue-600"
        }`}
      >
        <SellOutlinedIcon
          className={`${
            activeTab === "promotions" ? "text-blue-600" : "text-slate-700"
          }`}
          fontSize="small"
        />
        <span
          className={`ml-4 ${
            activeTab === "promotions" ? "text-blue-600" : "text-slate-700"
          } font-medium text-sm`}
        >
          Promotions
        </span>
      </button>
      <button
        onClick={() => changeTab("social")}
        className={`w-1/5 hover:bg-slate-100 p-4 text-left ${
          activeTab === "social" && "border-b-4 border-blue-600"
        }`}
      >
        <PeopleOutlineOutlinedIcon
          className={`${
            activeTab === "social" ? "text-blue-600" : "text-slate-700"
          }`}
          fontSize="small"
        />
        <span
          className={`ml-4 ${
            activeTab === "social" ? "text-blue-600" : "text-slate-700"
          } font-medium text-sm`}
        >
          Social
        </span>
      </button>
    </div>
  );
};

export default Tabs;

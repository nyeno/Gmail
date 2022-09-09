import Link from "next/link";
import logo from "../public/assets/logo_gmail_lockup_default_2x_r2.png";
import Image from "next/image";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorder from "@mui/icons-material/StarBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SideNav = () => {
  const [activeTab, setActiveTab] = useState("/");
  const { pathname } = useRouter();
  const changeTab = (type) => {
    setActiveTab(type);
  };
  useEffect(() => {
    console.log(pathname);
    changeTab(pathname);
  }, [pathname]);

  return (
    <nav className="w-1/5 mt-4">
      <div className="items-center flex mx-4 justify-around w-4/6">
        <MenuIcon />
        <Image src={logo} alt="Gmail Logo" width={105} height={38} />
      </div>
      <button className="bg-[#C2E7FF] py-4 px-6 rounded-2xl ml-3 my-4 font-medium space-x-2">
        <CreateOutlinedIcon fontSize="small" />
        <span className="ml-2">Compose</span>
      </button>
      <Link href="/">
        <a
          className={`${
            activeTab === "/" && "bg-[#D3E3FD]"
          } hover:bg-[#EAEBEF] py-1 pl-8 pr-2 mr-4 rounded-r-full text-sm flex justify-between`}
        >
          <div className="flex ">
            <InboxIcon fontSize="small" />
            <span className="pl-2 align-middle">Inbox</span>
          </div>
          <p
            className={`${
              activeTab === "/" ? "text-gray-800" : "text-[gray-500]"
            } font-bold text-sm`}
          >
            1,436
          </p>
        </a>
      </Link>
      <Link href="/starred">
        <a
          className={`${
            activeTab === "/starred" && "bg-[#D3E3FD]"
          } hover:bg-[#EAEBEF] py-1 px-8 mr-4 rounded-r-full text-sm`}
        >
          <StarBorder fontSize="small" />
          <span className="pl-2 align-middle">Starred</span>
        </a>
      </Link>
      <Link href="/sent">
        <a
          className={`${
            activeTab === "/sent" && "bg-[#D3E3FD]"
          } hover:bg-[#EAEBEF] py-1 px-8 mr-4 rounded-r-full text-sm`}
        >
          <SendOutlinedIcon fontSize="small" />
          <span className="pl-2 align-middle">Sent</span>
        </a>
      </Link>
      <Link href="/drafts">
        <a
          className={`${
            activeTab === "/drafts" && "bg-[#D3E3FD]"
          } hover:bg-[#EAEBEF] py-1 px-8 mr-4 rounded-r-full text-sm`}
        >
          <InsertDriveFileOutlinedIcon fontSize="small" />
          <span className="pl-2 align-middle">Drafts</span>
        </a>
      </Link>
      <Link href="/scheduled">
        <a
          className={`${
            activeTab === "/scheduled" && "bg-[#D3E3FD]"
          } hover:bg-[#EAEBEF] py-1 px-8 mr-4 rounded-r-full text-sm`}
        >
          <ScheduleSendOutlinedIcon fontSize="small" />
          <span className="pl-2 align-middle">Scheduled</span>
        </a>
      </Link>
      <Link href="/allmail">
        <a
          className={`${
            activeTab === "/allmail" && "bg-[#D3E3FD]"
          } hover:bg-[#EAEBEF] py-1 px-8 mr-4 rounded-r-full text-sm`}
        >
          <EmailOutlinedIcon fontSize="small" />
          <span className="pl-2 align-middle"> All Mail</span>
        </a>
      </Link>
      <Link href="/trash">
        <a
          className={`${
            activeTab === "/trash" && "bg-[#D3E3FD]"
          } hover:bg-[#EAEBEF] py-1 px-8 mr-4 rounded-r-full text-sm`}
        >
          <DeleteOutlinedIcon fontSize="small" />
          <span className="pl-2 align-middle">Trash</span>
        </a>
      </Link>
    </nav>
  );
};

export default SideNav;

import Image from "next/image";

import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

const TopNav = () => {
  return (
    <nav className="flex items-center justify-between my-3">
      <div className="w-4/6 flex justify-evenly py-3 px-2 bg-blue-100 rounded-xl">
        <SearchIcon />
        <input type="text" placeholder="Search in mail" className="w-5/6" />
        <TuneIcon />
      </div>
      <div className="w-1/6 justify-evenly flex items-center mr-4">
        <HelpOutlineIcon className="align-middle" />
        <SettingsIcon />
        <AppsIcon />
        <Image
          src="https://lh3.googleusercontent.com/ogw/AOh-ky3IVm2VGZwuLXpBTPV86N6o3QgmE6tuaCwo6qNqPg=s64-c-mo"
          alt="User Image"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </nav>
  );
};

export default TopNav;

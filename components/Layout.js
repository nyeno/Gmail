import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <div className=" w-full">
        <TopNav />
        {children}
      </div>
    </div>
  );
};

export default Layout;

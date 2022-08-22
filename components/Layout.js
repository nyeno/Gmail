import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Layout = ({children}) => {
    return ( 
        <div>
            <TopNav />
            <div className="flex">
                <SideNav />
                {children}   
            </div>
            
        </div>
     );
}
 
export default Layout;
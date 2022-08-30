import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Layout = ({children}) => {
    return ( 
        <div>
            <div className="flex">
                <SideNav />
                <div>
                    <TopNav />
                    {children} 
                </div>
                  
            </div>
            
        </div>
     );
}
 
export default Layout;
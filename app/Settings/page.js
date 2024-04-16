import SideNavbar from "../components/SideNavbar";
import Header from '../components/Header';
import Logo from '../components/Logo';


export const metadata = {
    title : "Settings Page",
    };
const SettingsPage = () =>{
  return (
    <div className="flex min-h-screen bg-gray-100">
    <SideNavbar />
    <div className="flex-1 flex flex-col">
    <Header />
    <Logo/>
    </div>
 </div>

      
  
    )
}
export default SettingsPage
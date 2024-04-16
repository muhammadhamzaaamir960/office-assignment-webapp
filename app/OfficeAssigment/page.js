
import SideNavbar from '../components/SideNavbar'; 
import Header from '../components/Header';
import Logo from '../components/Logo';
export const metadata = {
    title : "Office Assigment Page",
    };
const officeAssignmentPage = () =>{
  return (
    <div className="flex min-h-screen bg-gray-100">
    <SideNavbar />
    <Logo /> 
    <div className="flex-1 flex flex-col">
    <Header />
    
    </div>
 </div>
 

      
  
    )
}
export default officeAssignmentPage
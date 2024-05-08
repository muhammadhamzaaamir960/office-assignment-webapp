"use client";
import React, { useState } from 'react';
import SideNavbar from '../components/SideNavbar';
import Header from '../components/Header';
import Logo from '../components/Logo';

const OfficeAssignmentPage = () => {
    const [assignments, setAssignments] = useState([]);
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('Not Started');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('Low Priority');
    const [description, setDescription] = useState('');

    const handleAddAssignment = () => {
        if (description !== '') {
            const newAssignment = { assignee, status, department, priority, description };
            setAssignments([...assignments, newAssignment]);
            setDescription('');
            setPriority('Low Priority');
            setStatus('Not Started');
            setDepartment('');
            setAssignee('');
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <SideNavbar />
            <div className="flex-1 flex flex-col">
                <Header />
                <Logo />
                <div className="flex justify-center p-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-2/3">
                        <h1 className="text-2xl font-bold mb-4">New Request</h1>
                        <div className="mb-4">
                            <input type="text" placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)}
                            className="border p-2 w-full"/>
                        </div>
                        <div className="mb-4">
                            <select value={status} onChange={(e) => setStatus(e.target.value)}
                            className="border p-2 w-full">
                                <option value="Not Started">Not Started</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <select value={department} onChange={(e) => setDepartment(e.target.value)}
                            className="border p-2 w-full">
                                <option disabled value="">Choose Department...</option>
                                <option value="HR">All Faculty</option>
                                <option value="Tech">Industrial Engineering</option>
                                <option value="Marketing">Software Engineering</option>
                                <option value="Tech">Computer Engineering</option>
                                <option value="Marketing">Artifical Intelligence Engineering</option>
                                <option value="Tech">Energy Systems Engineering</option>
                                <option value="Marketing">Biomedical Engineering</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <select value={priority} onChange={(e) => setPriority(e.target.value)}
                            className="border p-2 w-full">
                                <option value="Low Priority">Low Priority</option>
                                <option value="Medium Priority">Medium Priority</option>
                                <option value="High Priority">High Priority</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
                            className="border p-2 w-full h-32"></textarea>
                        </div>
                        <button onClick={handleAddAssignment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeAssignmentPage;


/* 
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

const AssignmentsDashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const handleCreateAssignment = () => {
    setAssignments([...assignments, newAssignment]);
    setNewAssignment("");
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <title>Assignments Dashboard</title>
      <div className="flex min-h-screen bg-gray-100">
        <div className={`flex flex-col fixed top-0 left-0 h-screen bg-gray-900 text-white ${collapsed ? 'w-16' : 'w-48'} transition-width duration-300 ease-in-out`}>
          <button className="p-2 text-white focus:outline-none" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
          <ul className="flex flex-col flex-1 overflow-y-auto">
            <li className="flex items-center my-3 mx-3">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <div className="mr-2"><MenuIcon /></div>
                  {!collapsed && <span className="ml-2">Main Page</span>}
                </div>
              </Link>
            </li>
            <li className="flex items-center my-3 mx-3">
              <Link href="/office-assignment">
                <div className="flex items-center cursor-pointer">
                  <div className="mr-2"><MenuIcon /></div>
                  {!collapsed && <span className="ml-2">Office Assignment</span>}
                </div>
              </Link>
            </li>
            <li className="flex items-center my-3 mx-3">
              <Link href="/settings">
                <div className="flex items-center cursor-pointer">
                  <div className="mr-2"><MenuIcon /></div>
                  {!collapsed && <span className="ml-2">Settings</span>}
                </div>
              </Link>
            </li>
            <li className="flex items-center my-3 mx-3">
              <Link href="/logout">
                <div className="flex items-center cursor-pointer">
                  <div className="mr-2"><MenuIcon /></div>
                  {!collapsed && <span className="ml-2">Logout</span>}
                </div>
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center p-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              {!collapsed && <span className="ml-2 text-sm">Office</span>}
            </div>
          </div>
        </div>
        <div className={`flex-1 flex flex-col ml-16 md:ml-48 transition-margin duration-300 ease-in-out ${collapsed ? 'ml-16' : 'ml-48'}`}>
          <header className="bg-white shadow p-4">
            <h1 className="text-xl font-bold">Assignments Dashboard</h1>
          </header>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Create a New Assignment</h2>
              <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                <span className="ml-2 text-sm">Office</span>
              </div>
            </div>
            <input
              className="border p-2 mt-2 w-full"
              placeholder="New Assignment"
              value={newAssignment}
              onChange={(e) => setNewAssignment(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 mt-2 rounded"
              onClick={handleCreateAssignment}
            >
              Create Assignment
            </button>

            <h2 className="text-xl font-bold mt-6">Latest Assignments</h2>
            <div className="border p-4">
              {assignments.slice(-3).reverse().map((assignment, index) => (
                <div key={index} className="border-b py-2">
                  {assignment}
                </div>
              ))}
              {assignments.length === 0 && <p>No latest assignments available.</p>}
            </div>

            <h2 className="text-xl font-bold mt-6">All Assignments</h2>
            <div className="border p-4">
              {assignments.map((assignment, index) => (
                <div key={index} className="border-b py-2">
                  {assignment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentsDashboard;




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


*/
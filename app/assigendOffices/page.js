'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import * as XLSX from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideNavbar from '../components/SideNavbar';
import Header from '../components/Header';
import Logo from '../components/Logo';
//Note: I added a sorting feature to the table, so you can sort the columns by clicking on the headers. -Rawan

const AssignedOfficesPage = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    //the file is in public folder btw, edit it there if yall wanna add new entries BUT PLEASE FOLLOW MY FORMAT! -Nour <3 :)
    fetch('/Departments-Mock-Data.txt')
      .then(response => response.text())
      .then(text => parseData(text))
      .catch(error => console.error('Error loading department data:', error));
  }, []);

  const parseData = (text) => {
    const lines = text.split('\n');
    const staff = [];
    let currentDepartment = '';

    lines.forEach(line => {
        //fragile code dont edit please. -Rawan
      if (line.includes('Role')) {
        const role = line.match(/Role:(.*?) Name:/)[1].trim();
        const name = line.match(/Name:(.*)/)[1].trim();
        staff.push({
          name,
          role,
          department: currentDepartment,
          officeNumber: `Office ${100 + staff.length}`,
          currentOccupancy: Math.floor(Math.random() * 2) + 1,
          capacity: 3,
          floor: Math.floor(Math.random() * 5) + 1
        });
      } else if (line.includes(':')) {
        currentDepartment = line.split(':')[0].trim();
      }
    });

    setStaffMembers(staff);
  };

  const data = useMemo(() => {
    return staffMembers.filter(person => person.department.includes(selectedDepartment));
  }, [staffMembers, selectedDepartment]);

  const columns = useMemo(() => [ //Tankut Hoca said we should add a distance column, but I don't have that data so I'm not adding it. -Nour
    { Header: 'Office Number', accessor: 'officeNumber' },
    { Header: 'Person Occupying', accessor: 'name' },
    { Header: 'Role', accessor: 'role' },
    { Header: 'Department Occupying', accessor: 'department' },
    { Header: 'Current Occupation', accessor: 'currentOccupancy' },
    { Header: 'Capacity', accessor: 'capacity' },
    { Header: 'Floor Number', accessor: 'floor' },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy);

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  const handleSelectDepartment = e => {
    setSelectedDepartment(e.target.value);
  };

  const exportToExcel = () => {
    try {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Assigned Offices");
      XLSX.writeFile(wb, "assigned_offices.xlsx");
      console.log("Export function called."); // Debugging thingy to Check if this function is called -Kaan
      toast.success(`File has been successfully exported: assigned_offices.xlsx`);
    } catch (error) {
      console.error("Export failed:", error); //I logged it here so its easier to see the error in the console -Kaan
      toast.error(`Failed to export file: ${error.message}`); //and added a toast to show the error message to the user -Kaan
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Logo />
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="text-2xl font-bold text-center mb-4">Assigned Offices Page</h1>
          <div style={{ margin: '10px 0' }}>
            <input
              value={filterInput}
              onChange={handleFilterChange}
              placeholder="Search by name..."
            />
            <select onChange={handleSelectDepartment} defaultValue="">
              <option value="">All Departments</option>
              {[...new Set(staffMembers.map(item => item.department))].map(department => (
                <option key={department} value={department}>{department}</option>
              ))}
            </select>
          </div>
          <button onClick={exportToExcel} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Export to Excel
          </button>
          <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          <div className="overflow-x-auto">
            <table {...getTableProps()} style={{ margin: 'auto', borderCollapse: 'collapse', border: 'solid 1px gray', width: '100%' }}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ borderBottom: 'solid 3px blue', background: 'aliceblue', color: 'black', fontWeight: 'bold', padding: '10px', border: 'solid 1px gray' }}>
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''} 
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', textAlign: 'center' }}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedOfficesPage;







// 'use client';
// import React, { useEffect, useState, useMemo } from 'react';
// import { useTable, useSortBy, useFilters } from 'react-table';
// import * as XLSX from 'xlsx';
// import SideNavbar from '../components/SideNavbar';
// import Header from '../components/Header';
// import Logo from '../components/Logo';

// const AssignedOfficesPage = () => {
//   const [staffMembers, setStaffMembers] = useState([]);

//   useEffect(() => {
//     fetch('/Departments-Mock-Data.txt')
//       .then(response => response.text())
//       .then(text => parseData(text))
//       .catch(error => console.error('Error loading department data:', error));
//   }, []);

//   const parseData = (text) => {
//     const lines = text.split('\n');
//     const staff = [];
//     let currentDepartment = '';

//     lines.forEach(line => {
//       if (line.includes(':')) {
//         if (line.startsWith('Role')) {
//           const role = line.match(/Role:(.*?) Name:/)[1].trim();
//           const name = line.match(/Name:(.*)/)[1].trim();
//           staff.push({
//             name: name,
//             role: role,
//             department: currentDepartment,
//             officeNumber: `Office ${100 + staff.length}`,
//             currentOccupancy: Math.floor(Math.random() * 2) + 1,
//             capacity: 3,
//             floor: Math.floor(Math.random() * 5) + 1
//           });
//         } else {
//           currentDepartment = line.trim().replace(':', '');
//         }
//       }
//     });

//     setStaffMembers(staff);
//   };

//   const data = useMemo(() => staffMembers, [staffMembers]);

//   const columns = useMemo(() => [
//     { Header: 'Office Number', accessor: 'officeNumber' },
//     { Header: 'Person Occupying', accessor: 'name' },
//     { Header: 'Role', accessor: 'role' },
//     { Header: 'Department Occupying', accessor: 'department' },
//     { Header: 'Current Occupation', accessor: 'currentOccupancy' },
//     { Header: 'Capacity', accessor: 'capacity' },
//     { Header: 'Floor Number', accessor: 'floor' },
//   ], []);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data }, useFilters, useSortBy);

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Assigned Offices");
//     XLSX.writeFile(wb, "assigned_offices.xlsx");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <SideNavbar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <Logo />
//         <div className="flex flex-col items-center justify-center p-8">
//           <h1 className="text-2xl font-bold text-center mb-4">Assigned Offices Page</h1>
//           <button onClick={exportToExcel} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Export to Excel
//           </button>
//           <div className="overflow-x-auto">
//             <table {...getTableProps()} style={{ margin: 'auto', borderCollapse: 'collapse', border: 'solid 1px gray', width: '100%' }}>
//               <thead>
//                 {headerGroups.map(headerGroup => (
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map(column => (
//                       <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ borderBottom: 'solid 3px blue', background: 'aliceblue', color: 'black', fontWeight: 'bold', padding: '10px', border: 'solid 1px gray' }}>
//                         {column.render('Header')}
//                         <span>
//                           {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
//                         </span>
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody {...getTableBodyProps()}>
//                 {rows.map(row => {
//                   prepareRow(row);
//                   return (
//                     <tr {...row.getRowProps()}>
//                       {row.cells.map(cell => (
//                         <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', textAlign: 'center' }}>
//                           {cell.render('Cell')}
//                         </td>
//                       ))}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignedOfficesPage;

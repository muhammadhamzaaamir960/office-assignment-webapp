'use client';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import * as XLSX from 'xlsx';
import SideNavbar from '../components/SideNavbar';
import Header from '../components/Header';
import Logo from '../components/Logo';

const AssignedOfficesPage = () => {
    const data = useMemo(() => [
        { name: 'Office 101', location: 'First Floor', occupation: '2', department: 'Software Engineering' },
        { name: 'Office 102', location: 'First Floor', occupation: '1', department: 'Industrial Engineering' },
        { name: 'Office 103', location: 'Third Floor', occupation: '2', department: 'Computer Engineering' },
    ], []);

    const columns = useMemo(() => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Office Location', accessor: 'location' },
        { Header: 'Current Occupation', accessor: 'occupation' },
        { Header: 'Department Occupying', accessor: 'department' },
    ], []);

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Assigned Offices");
        XLSX.writeFile(wb, "assigned_offices.xlsx");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <SideNavbar />
            <div className="flex-1 flex flex-col">
                <Header />
                <Logo />
                <div className="flex flex-col items-center justify-center p-8">
                    <h1 className="text-2xl font-bold text-center mb-4">Assigned Offices Page</h1>
                    <button onClick={exportToExcel} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Export to Excel
                    </button>
                    <div className="overflow-x-auto">
                        <table {...getTableProps()} style={{ margin: 'auto', borderCollapse: 'collapse', border: 'solid 1px gray' }}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px blue', background: 'aliceblue', color: 'black', fontWeight: 'bold', padding: '10px', border: 'solid 1px gray' }}>
                                                {column.render('Header')}
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
                                                <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray' }}>
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

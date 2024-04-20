import React from 'react';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';


const LatestAssignments = () => {
    const assignments = [
      { id: 1, name: 'Person#1', icon: <FaceIcon /> },
      { id: 2, name: 'Person#2', icon: <Face2Icon /> },
      { id: 3, name: 'Person#3', icon: <Face3Icon /> },
      { id: 4, name: 'Person#4', icon: <Face4Icon /> },
      { id: 5, name: 'Person#5', icon: <Face5Icon /> },
    ];
  
    return (
      <section className="assignments-container ">
        <h2 className="text-xl font-bold mb-4">Latest Assignments</h2>
        <div className="grid-container grid gap-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="assignment-box flex flex-col items-center p-4 border rounded-lg">
              <div className="avatar-icon mb-2">{assignment.icon}</div>
              <div className="person-name text-sm">{assignment.name}</div>
            </div>
          ))}
        </div>
        <a href="#" className="view-all text-blue-600 mt-4 inline-block">View All →</a>
      </section>
    );
  };
  
  export default LatestAssignments;
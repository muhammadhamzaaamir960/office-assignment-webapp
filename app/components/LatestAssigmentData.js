import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';

const LatestAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('/api/listAssignments')
      .then(response => response.json())
      .then(data => setAssignments(data))
      .catch(error => console.error('Error fetching assignments:', error));
  }, []);

  return (
    <section className="assignments-container ">
      <h2 className="text-xl font-bold mb-4">Latest Assignments</h2>
      <div className="grid-container grid gap-4">
        {assignments.map((fileName, index) => (
          <Link key={index} href={`/displayLatest?file=${fileName}`}>
            <div className="assignment-box flex flex-col items-center p-4 border rounded-lg cursor-pointer">
              <div className="avatar-icon mb-2">
                {index % 5 === 0 && <FaceIcon />}
                {index % 5 === 1 && <Face2Icon />}
                {index % 5 === 2 && <Face3Icon />}
                {index % 5 === 3 && <Face4Icon />}
                {index % 5 === 4 && <Face5Icon />}
              </div>
              <div className="person-name text-sm">{fileName}</div>
            </div>
          </Link>
        ))}
      </div>
      <a href="#" className="view-all text-blue-600 mt-4 inline-block">View All →</a>
    </section>
  );
};

export default LatestAssignments;

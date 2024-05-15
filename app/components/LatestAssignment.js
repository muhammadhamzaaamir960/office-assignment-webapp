"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';

const LatestAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/listAssignments')
      .then(response => response.json())
      .then(data => setAssignments(data))
      .catch(error => console.error('Error fetching assignments:', error));
  }, []);

  const handleClick = (fileName) => {
    router.push(`/displayLatest?file=${fileName}`);
  };

  return (
    <section className="assignments-container ">
      <h2 className="text-xl font-bold mb-4">Latest Assignments</h2>
      <div className="grid-container grid gap-4">
        {assignments.map((fileName, index) => (
          <button
            key={index}
            className="assignment-box flex flex-col items-center p-4 border rounded-lg cursor-pointer"
            onClick={() => handleClick(fileName)}
          >
            <div className="avatar-icon mb-2">
              {index % 5 === 0 && <FaceIcon />}
              {index % 5 === 1 && <Face2Icon />}
              {index % 5 === 2 && <Face3Icon />}
              {index % 5 === 3 && <Face4Icon />}
              {index % 5 === 4 && <Face5Icon />}
            </div>
            <div className="person-name text-sm">{fileName}</div>
          </button>
        ))}
      </div>
      <Link href="#" className="view-all text-blue-600 mt-4 inline-block">View All →</Link>
    </section>
  );
};

export default LatestAssignments;

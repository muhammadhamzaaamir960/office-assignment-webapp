const LatestAssignments3 = ({ assignments }) => {
 
    const latest = assignments.slice(-3).reverse();
  
    return (
      <div className="border p-4">
        {latest.length > 0 ? (
          latest.map((assignment, index) => (
            <div key={index} className="border-b py-2">
              {assignment}
            </div>
          ))
        ) : (
          <p>No latest assignments available.</p>
        )}
      </div>
    );
  };
  
  export default LatestAssignments3;
  
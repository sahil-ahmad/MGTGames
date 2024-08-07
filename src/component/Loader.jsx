import React, { useState, useEffect } from 'react';
import '../App.css';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a 3 second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      ) : (
        <div className="content">
          {/* Aapka website content yaha hoga */}
          {/* <h1>Welcome to My Website</h1> */}
          {/* <p>This is the content of the website.</p> */}
        </div>
      )}
    </div>
  );
}

export default Loader;

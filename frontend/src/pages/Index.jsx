import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Your Blank Canvas</h1>
        <p className="text-center">
          Chat with the agent to start making edits.
        </p>
        {data && (
          <div className="mt-4 text-center">
            <p>Data from backend:</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
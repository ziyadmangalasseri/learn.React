import { useState, useEffect } from "react";

// const [state, setState] = useState("");

export const UserFunction = (props) => {
  useEffect(() => {
      const timer = setInterval(() => {
        console.log("working componet did mount");
      }, 1000);

      return () => {
        clearInterval(timer)
      }
  }, []);

 
  return (
    <div className="user-card">
      <img />
      <h1>ziyad</h1>

      <h3>Mankada Pallippuram</h3>
    </div>
  );
};

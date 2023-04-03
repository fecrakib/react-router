import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h3>This is friends component</h3>
    {
      data.map(d=><Friend key={d.id}  user={d}/>)
    }
    </div>
  );
};

export default Friends;

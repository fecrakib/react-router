import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";
const Friend = ({ user }) => {
  console.log(user);

  return (
    <div className="friend">
      <h3>Name:{user.name}</h3>
      <p>Email:{user.email}</p>
      <p>Phone:{user.phone}</p>
      <p><Link to={`/friend/${user.id}`}>Show me Details</Link></p>
    </div>
  );
};

export default Friend;

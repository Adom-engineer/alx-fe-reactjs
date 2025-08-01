// src/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserProfile;

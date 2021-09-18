import React, { useContext } from "react";
import { UseContext } from "./Context";

function User() {
  const { username } = useContext(UseContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default User;

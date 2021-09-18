import React, { useContext } from "react";
import { UseContext } from "./Context";

function Login() {
  const { setUsername } = useContext(UseContext);

  return (
    <div>
      <input
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;

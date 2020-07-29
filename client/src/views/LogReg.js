import React from "react";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const LogReg = ({ setLoggedIn }) => {
  return (
    <div className="container-flex">
      <SignIn setLoggedIn={setLoggedIn} />
      <SignUp />
    </div>
  );
};

export default LogReg;

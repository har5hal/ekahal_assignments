import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <h1>Oops! Page not found :(</h1>
      <Link to='/'>Go Back</Link>
    </>
  );
}

export default NoPage;

import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const data = useLocation();
  return <div>Payment Successful !!!</div>;
};

export default Success;

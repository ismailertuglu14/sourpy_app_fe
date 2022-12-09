import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    /// [navigate(-1)] means, navigate to last screen of navigate stack
    navigate(-1);
  }, [navigate]);

  return <Fragment></Fragment>;
};

export default NoPage;

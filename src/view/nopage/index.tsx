import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @function navigate(-1)  Go back one page in history
 */

const NoPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1);
  }, [navigate]);

  return <Fragment></Fragment>;
};

export default NoPage;

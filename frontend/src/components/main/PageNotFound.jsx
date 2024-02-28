import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import PageNotFoundCSS from "../../styles/PageNotFound.module.css";
import TypographyCSS from "../../styles/Typography.module.css";

const PageNotFound = () => {
  return (
    <>
      <div
        className={`${PageNotFoundCSS.mainContainer} ${TypographyCSS.pageNotFoundText}`}
      >
        <div className={`${TypographyCSS.text404}`}>404</div>
        <div className={`${TypographyCSS.largeText}`}>Page not found.</div>
        <div>We're sorry, the page you requested could not be found.</div>
        <br />
        <div>
          <Link reloadDocument to="/">
            <Button>Go to homepage</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;

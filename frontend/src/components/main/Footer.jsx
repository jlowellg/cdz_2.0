import React from "react";
import FooterCSS from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterCSS.footerContainer}>
      <div className={FooterCSS.footerImage} />
      <div></div>
    </footer>
  );
};

export default Footer;

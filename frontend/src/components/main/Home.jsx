import React from "react";
import HomeCSS from "../../styles/Home.module.css";
import homeBG from "../../assets/videos/homeBG.mp4";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <>
      <main className={HomeCSS.videoContainer}>
        <video className={HomeCSS.video} src={homeBG} autoPlay loop muted />
        <hgroup className={HomeCSS.title}>
          <h1 className={HomeCSS.title1}>DISCOUNTED TOP UP</h1>
          <h2 className={HomeCSS.title2}>To your favorite games.</h2>
        </hgroup>
      </main>
      <section className={HomeCSS.productMainContainer}>
        <div className={HomeCSS.productSubContainer}>
          <div className={HomeCSS.productTitle}>
            Available Games <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div div className={HomeCSS.productContainer}>
            <img
              className={HomeCSS.productIcon}
              src="../../../images/valorantIcon.png"
            />
            <img
              className={HomeCSS.productIcon}
              src="../../../images/mobileLegendsIcon.png"
            />

            <img
              className={HomeCSS.productIcon}
              src="../../../images/leagueIcon.png"
            />
            <img
              className={HomeCSS.productIcon}
              src="../../../images/genshinIcon.png"
            />
            <img
              className={HomeCSS.productIcon}
              src="../../../images/wildRiftIcon.png"
            />
            <img
              className={HomeCSS.productIcon}
              src="../../../images/farlightIcon.png"
            />
            <img
              className={HomeCSS.productIcon}
              src="../../../images/codIcon.png"
            />
            <img
              className={HomeCSS.productIcon}
              src="../../../images/steamIcon.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

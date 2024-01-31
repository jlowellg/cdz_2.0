import React from "react";
import HomeCSS from "../../styles/Home.module.css";
import homeBG from "../../assets/videos/homeBG.mp4";

const Home = () => {
  return (
    <>
      <main className={HomeCSS.videoContainer}>
        <video className={HomeCSS.video} src={homeBG} autoPlay loop muted />
        <hgroup className={HomeCSS.title}>
          <h1 className={HomeCSS.test1}>DISCOUNTED TOP UP</h1>
          <h2 className={HomeCSS.test2}>To your favorite games.</h2>
        </hgroup>
      </main>
    </>
  );
};

export default Home;

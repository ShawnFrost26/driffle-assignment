import React from "react";
import "./Orbits.css";
import "./InnerOrbit.css";
import "./MiddleOrbit.css";
import "./OuterOrbit.css";

const Orbits = () => {
  return (
    <section className="main-container">
      <div className="orbits-container">
        <div className="inner-orbit">
          <div className="inner-rotation-container">
            <div className="rotate-inner-img-gta">
              <span className="inner-img-gta"></span>
            </div>
          </div>
        </div>
        <div className="middle-orbit">
          <div className="middle-rotation-container">
            <div className="rotate-middle-img-xbox">
              <span className="middle-img-xbox"></span>
            </div>
            <div className="rotate-middle-img-batman">
              <span className="middle-img-batman"></span>
            </div>
          </div>
        </div>
        <div className="outer-orbit">
          <div className="outer-rotation-container">
            <div className="rotate-outer-img-minecraft">
              <span className="outer-img-minecraft"></span>
            </div>
            <div className="rotate-outer-img-mortalkombat">
              <span className="outer-img-mortalkombat"></span>
            </div>
            <div className="rotate-outer-img-fifa">
              <span className="outer-img-fifa"></span>
            </div>
          </div>
        </div>
        <div className="gradient-color-container"></div>
        <div className="text-container">
          <div className="heading">
            Driffle is a <span>one-stop shop</span> for all your gaming needs.
          </div>
          <div className="para">
            Not only do we sell games, but also offer gift cards, DLC's, and
            more. Driffle is a marketplace, so you can find a wide variety of
            items from different sellers in one place. We are committed to the
            future of gaming and strive to make our platform safe, affordable,
            and sustainable for all users. Whether you're looking for the latest
            releases or hard-to-find classics, you're sure to find what you're
            looking for on Driffle.
          </div>
        <div className="button">Visit our store</div>
        </div>
      </div>
    </section>
  );
};

export default Orbits;

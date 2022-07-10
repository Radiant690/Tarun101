import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="hero__container">
        <div className="hero__container-top">
          <div className="row">
            <div className="col-md-5 bg-danger">
              <img
                src="https://images.pexels.com/photos/9584413/pexels-photo-9584413.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ad__top-1"
              />
            </div>
            <div className="col-md-3 bg-primary">
              <img
                src="https://images.pexels.com/photos/9584419/pexels-photo-9584419.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ad__top-2"
              />
            </div>
            <div className="col-md-4 bg-success">
              <img
                src="https://images.pexels.com/photos/9584413/pexels-photo-9584413.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ad__top-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__container-bottom">
        <div className="row">
          <div className="col-md-7 bg-secondary">
            <img
              src="https://images.pexels.com/photos/8641568/pexels-photo-8641568.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="ad__top-2"
            />
          </div>
          <div className="col-md-2 bg-black">
            <img
              src="https://images.pexels.com/photos/9584413/pexels-photo-9584413.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="ad__top-1"
            />
          </div>
          <div className="col-md-3 bg-primary">
            <img
              src="https://images.pexels.com/photos/9584419/pexels-photo-9584419.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="ad__top-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

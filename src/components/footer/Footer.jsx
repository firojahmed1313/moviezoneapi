import "./footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from "react";
const Footer = () => {
  return (
    
      <div className=" my-0">
        <footer
          className="text-center text-white"
          style={{backgroundColor: "#3f51b5"}}
        >
          <div className="container">
          

            <hr className="my-2" />

            <section className="mb-1">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                  Welcome to our movie website! Discover a vast collection of movies and TV shows across various genres. Enjoy seamless streaming with high-quality video and personalized recommendations. Sign up now for an unforgettable cinematic experience.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-1"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2023 Copyright:
            <a className="text-white" href="https://firojahmed1313.github.io/protfolio/">
              MD FIROJ AHMED
            </a>
          </div>
        </footer>
      </div>
    
  );
};

export default Footer;

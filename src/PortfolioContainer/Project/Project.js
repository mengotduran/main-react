import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import watches from "../../../src/Img/Testimonial/watches 1.png";
import electronics from "../../../src/Img/Testimonial/electronics.png";
import javascript from "../../../src/Img/Testimonial/javascript.png";
import imgWidget from "../../../src/Img/Testimonial/img widget.png";
import shoes from "../../../src/Img/Testimonial/shoes 1.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Sample Projects Built"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <a href="https://dev-jjbrown.pantheonsite.io/" target="_blank"><img src={watches} alt="no internet connection"></img></a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                <a href="https://mengotduran.github.io/ecommerce-react/" target="_blank"><img src={electronics} alt="no internet connection"></img></a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                <a href="https://mengotduran.github.io/Javascript-challenge/" target="_blank"><img src={javascript} alt="no internet connection"></img></a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                <a href="https://mengotduran.github.io/images-display/portfolio.html" target="_blank"><img src={imgWidget} alt="no internet connection"></img></a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                <a href="https://mengotduran.github.io/e-commerce/" target="_blank"><img src={shoes} alt="no internet connection"></img></a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div> */}
    </div>
  );
}

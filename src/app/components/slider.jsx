import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "bootstrap"

const Slider = ({currentUser}) => {

    // const carousel = document.querySelector("#carouselExampleDark");
    // const car = new Carousel(carousel);
    // car.carousel();

    const handleSliderClick = (e) => {
      //carousel.carousel("next");
      //  let currentSlider=0;
      //  const sliders=e.target.closest(".carousel").querySelectorAll(".carousel-indicators>button");
      //  const items = e.target
      //      .closest(".carousel")
      //      .querySelectorAll(".carousel-item");
      //  for (const slider of sliders) {
      //      if (slider.ariaCurrent) {
      //         slider.classList.toggle("active");
      //         slider.ariaCurrent = null;
      //         slider.dataBsSlide="next";
      //         break;
      //      }
      //      currentSlider ++;
      //  }
       
// items[currentSlider].classList.toggle("carousel-item-start");
//        if (e.target.classList.contains("carousel-control-prev-icon")) {
//          currentSlider =
//              currentSlider === 0 ? sliders.length - 1 : currentSlider - 1;
           
//        } else {
//          currentSlider=(currentSlider<sliders.length-1?currentSlider+1:0);
//         };

//        sliders[currentSlider].ariaCurrent = true;
//        sliders[currentSlider].classList.toggle("active");
//        items[currentSlider].classList.toggle("activate");
//        items[currentSlider].classList.toggle("carousel-item-next");

    }

return (
    <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-touch="false"
        data-bs-ride="carousel"
        onClick={handleSliderClick}
    >
        <div className="carousel-indicators">
            {currentUser.sliderjobs.map((slider, ind) => {
                if (ind === 0) {
                    return (
                        <button
                            key={ind}
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={ind}
                            className="active"
                            aria-current="true"
                            aria-label={"Slide " + ind}
                        ></button>
                    );
                } else
                    return (
                        <button
                            key={ind}
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={ind}
                            aria-label={"Slide " + ind}
                        ></button>
                    );
            })}
        </div>
        <div className="carousel-inner bg-light">
            {currentUser.sliderjobs.map((slider, ind) => {
                return (
                    <div
                        key={ind}
                        className={`carousel-item ${ind === 0 ? "active" : ""}`}
                        data-bs-interval="10000"
                    >
                        <img
                            src={slider.photo}
                            className="d-block w-100"
                            alt="..."
                        ></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Слайдер номер {ind + 1}</h5>
                            <p>{slider.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
        >
            <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
        >
            <span
                className="carousel-control-next-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Следующий</span>
        </button>
    </div>
);
}

Slider.propTypes={
    currentUser: PropTypes.object
}

export default Slider;
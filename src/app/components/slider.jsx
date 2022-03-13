import React from "react";
import PropTypes from 'prop-types';

const Slider = ({currentUser}) => {

    const handleSliderClick = (e) => {
       let currentSlider=0;
       const sliders=e.target.closest(".carousel").querySelectorAll(".carousel-indicators>button");
       const items = e.target
           .closest(".carousel")
           .querySelectorAll(".carousel-item");
       for (const slider of sliders) {
           if (slider.ariaCurrent) {
              slider.ariaCurrent=null;
              slider.classList.toggle("active");
              break;
           }
           currentSlider ++;
       }
       items[currentSlider].classList.toggle("active");

       if (e.target.classList.contains("carousel-control-prev-icon")) {
         currentSlider =
             currentSlider === 0 ? sliders.length - 1 : currentSlider - 1;
           
       } else {
         currentSlider=(currentSlider<sliders.length-1?currentSlider+1:0);
        };

       items[currentSlider].classList.toggle("active");
       sliders[currentSlider].ariaCurrent = true;
       sliders[currentSlider].classList.toggle("active");
    }

return (
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" onClick={handleSliderClick}>
  <div className="carousel-indicators">
    {currentUser.sliderjobs.map((slider, ind) => {
      if (ind===0) {
        return (<button key={ind} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={ind} className="active" aria-current="true" aria-label={"Slide "+ ind}></button>)
      } else return (<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={ind} aria-label={"Slide "+ ind}></button>)
    })}
  </div>
  <div className="carousel-inner bg-light">
    {currentUser.sliderjobs.map((slider, ind) => {
      return (
          <div className={`carousel-item ${ind===0?"active":""}`} data-bs-interval="3000">
              <img src={slider.photo} className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                  <h5>Слайдер номер {ind+1}</h5>
                  <p>
                      {slider.description}
                  </p>
              </div>
          </div>
      );})}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Предыдущий</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Следующий</span>
  </button>
</div>
)
}

Slider.propTypes={
    currentUser: PropTypes.object
}

export default Slider;
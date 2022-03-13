import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import "./index.css";

const CardMainPage = ({ name, age, about, src, alt }) => {
  console.log(src);
  // const url =
  //   "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2432&q=80";
  const cardRef = useRef(null);
  const update = ({ x }) => {
    const bounds = cardRef.current.getBoundingClientRect();
    const center = bounds.left + bounds.width / 2;
    const newX = gsap.utils.mapRange(
      center - window.innerWidth,
      center + window.innerWidth,
      -100,
      100,
      x
    );
    gsap.set(cardRef.current, { "--x": newX });
  };
  useEffect(() => {
    window.addEventListener("pointermove", update);
    return () => {
      window.removeEventListener("pointermove", update);
    };
  }, []);
  return (
    <div ref={cardRef} className="media-card">
      <span className="media-card__img-container">
        <img src={src} alt={alt} className="media-card__img" />
      </span>
      <span className="media-card__title">{name}</span>
      <span className="media-card__subtitle">{age}</span>
      <span className="media-card__subtitle">{about}</span>
    </div>
  );
};

CardMainPage.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  about: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default CardMainPage;

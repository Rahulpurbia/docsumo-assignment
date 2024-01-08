import React from "react";
import "./Carousel.css";

export const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item-text">
        <div className="testimonial-title">{item.title}</div>
        <div className="testimonial-text">{item.testimonial}</div>
        <div className="testimonial-author">
          <div>{item.author}</div>
          <div>{item.designation}</div>
        </div>
      </div>
      <img className="carousel-img" src={item.image} />
    </div>
  );
};

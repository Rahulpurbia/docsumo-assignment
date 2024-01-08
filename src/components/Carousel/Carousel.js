import React, { useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./Carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title:
        "Docsumo is your go-to solution if you need a flexible solution to capture data from unstructured documents",
      author: "Rahul Purbia",
      designation: "Business Process Manager, BiagiBros, California",
      testimonial:
        "“Docsumo does a very good job when it comes to our specific use-case. Debt settlement letters vary a lot from each other, but Docsumo manages to capture data accurately almost every single time at the processing speed which is unprecedented. We’re witnessing the STP rate of over 95% with Docsumo.”",
      image:
        "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b008a1_Arbor.webp",
    },
    {
      title:
        "Docsumo is your go-to solution if you need a flexible solution to capture data from unstructured documents",
      author: "Rahul Purbia",
      designation: "Business Process Manager, BiagiBros, California",
      testimonial:
        "“Docsumo does a very good job when it comes to our specific use-case. Debt settlement letters vary a lot from each other, but Docsumo manages to capture data accurately almost every single time at the processing speed which is unprecedented. We’re witnessing the STP rate of over 95% with Docsumo.”",
      image:
        "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b0076b_National.webp",
    },
    {
      title:
        "Docsumo is your go-to solution if you need a flexible solution to capture data from unstructured documents",
      author: "Rahul Purbia",
      designation: "Business Process Manager, BiagiBros, California",
      testimonial:
        "“Docsumo does a very good job when it comes to our specific use-case. Debt settlement letters vary a lot from each other, but Docsumo manages to capture data accurately almost every single time at the processing speed which is unprecedented. We’re witnessing the STP rate of over 95% with Docsumo.”",
      image:
        "https://assets-global.website-files.com/64be86eaa29fa71f24b00661/64be86eaa29fa71f24b0084e_Jones.webp",
    },
  ];

  useEffect(() => {
    let timer = setInterval(() => {
      updateIndex();
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const updateIndex = (newIndex) => {
    setActiveIndex((prev) => {
      newIndex = newIndex || prev + 1;
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= items.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  return (
    <div className="carousel position-relative bg-default">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="prev-arrow bg-default">&#8249;</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
                key={index}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                ></span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="next-arrow bg-default">&#8250;</span>
        </button>
      </div>
    </div>
  );
};

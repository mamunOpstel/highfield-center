"use client";
import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import TestimonialCard from "../testimonialCard/testimonialCard";

function Slider({ data, textCenter = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div id={styles.slider}>
      {data.map((card) => (
        <div
          key={card.id}
          id={styles.card}
          style={
            textCenter
              ? {
                  translate: `${-100 * currentIndex}%`,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }
              : { translate: `${-100 * currentIndex}%` }
          }
        >
          {/* card starts here */}
          <TestimonialCard text={card.text} img={card.image} name={card.name} />
          {/* card starts here */}
        </div>
      ))}
    </div>
  );
}

export default Slider;

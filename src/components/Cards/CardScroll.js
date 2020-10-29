import * as React from "react";
import { render } from "react-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import './CardScroll.css'

const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const movies = [
  "/living-space-01.jpg",
  "/marble-01.jpg",
  "/marble-02.jpg",
  "/tmarble-03.jpg",
  "/marble-04.jpg"
]

const CardScroll = (props) => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return (
    <>
      <div className="container">
        {movies.map(src => (
          <animated.div
            key={src}
            className="card-scroll"
            style={{
              // ...style,
              background: `url(${src})`
            }}
          />
        ))}
        {movies.map(src => (
          <img
            style={{
              ...style,
              background: `url(${src})`
            }}
          />
        ))}
      </div>
    </>
  )
}

export default CardScroll
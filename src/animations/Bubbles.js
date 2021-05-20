import { useSprings } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React from "react";
import useTheme from "../cutomHooks/useTheme";
import { randomFloatFromInterval } from "../utils/randomFloatFromInterval";
import { randomIntFromInterval } from "../utils/randomIntFromInterval";

// const translates = [
//   { x: 185, y: 394 },
//   { x: 367, y: 188 },
//   { x: 348, y: 402 },
//   { x: 417, y: 282 },
//   { x: 261, y: 238 },

//   { x: 303, y: 615 },
//   { x: 501, y: 595 },
//   { x: 530, y: 97 },
//   { x: 210, y: 121 },
//   { x: 363, y: 715 },

//   { x: 458, y: 704 },
//   { x: 306, y: 862 },
//   { x: 287, y: 740 },
//   { x: 440, y: 802 },
//   { x: 532, y: 941 },

//   { x: 532, y: 835 },
//   { x: 417, y: 853 },
//   { x: 363, y: 923 },
//   { x: 354, y: 828 },
//   { x: 458, y: 895 },

//   { x: 496, y: 792 },
// ];

function Bubbles() {
  const { theme } = useTheme();
  const [animations] = useSprings(21, (index) => ({
    from: {
      opacity: randomFloatFromInterval(0.1, 0.2),
      //   transform: `translate(${translates[index].x}px,${translates[index].y}px)`,
    },
    to: {
      opacity: randomFloatFromInterval(0.8, 1),
      //   transform: `translate(${
      //     translates[index].x + randomIntFromInterval(-50, 50)
      //   }px,(${translates[index].y + randomIntFromInterval(-50, 50)}px)`,
    },
    config: {
      duration: randomIntFromInterval(500, 2000),
    },
    loop: { reverse: true },
  }));

  return (
    <div
      className="h-full"
      style={{ width: "120%", transform: "translateX(-5%)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 486 862"
        style={{
          width: "110%",
          height: "110%",
          transform: "translate(0,-5%)",
        }}
      >
        <g
          fill="#fff"
          stroke="#707070"
          strokeWidth="1"
          data-name="Group 12"
          transform="translate(-185 -97)"
        >
          <animated.g
            style={animations[0]}
            data-name="Ellipse 1"
            transform="translate(185 394)"
          >
            <circle cx="50" cy="50" r="49.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[1]}
            data-name="Ellipse 2"
            transform="translate(367 188)"
          >
            <circle cx="25" cy="25" r="24.5" fill={theme.color2}></circle>
          </animated.g>

          <animated.g
            style={animations[2]}
            data-name="Ellipse 3"
            transform="translate(348 402)"
          >
            <circle cx="92" cy="92" r="91.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[3]}
            data-name="Ellipse 4"
            transform="translate(417 282)"
          >
            <circle cx="50" cy="50" r="49.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[4]}
            data-name="Ellipse 5"
            transform="translate(261 238)"
          >
            <circle cx="53" cy="53" r="52.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[5]}
            data-name="Ellipse 6"
            transform="translate(303 615)"
          >
            <circle cx="25" cy="25" r="24.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[6]}
            data-name="Ellipse 7"
            transform="translate(501 595)"
          >
            <circle cx="44.5" cy="44.5" r="44" fill={theme.color2}></circle>
          </animated.g>

          <animated.g
            style={animations[7]}
            data-name="Ellipse 8"
            transform="translate(530 97)"
          >
            <circle cx="70.5" cy="70.5" r="70" fill={theme.color2}></circle>
          </animated.g>

          <animated.g
            style={animations[8]}
            data-name="Ellipse 9"
            transform="translate(210 121)"
          >
            <circle cx="46.5" cy="46.5" r="46" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[9]}
            data-name="Ellipse 10"
            transform="translate(363 715)"
          >
            <circle cx="8.5" cy="8.5" r="8" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[10]}
            data-name="Ellipse 12"
            transform="translate(458 704)"
          >
            <circle cx="19" cy="19" r="18.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[11]}
            data-name="Ellipse 13"
            transform="translate(306 862)"
          >
            <circle cx="11" cy="11" r="10.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[12]}
            data-name="Ellipse 14"
            transform="translate(287 740)"
          >
            <circle cx="15" cy="15" r="14.5" fill={theme.color2}></circle>
          </animated.g>

          <animated.g
            style={animations[13]}
            data-name="Ellipse 16"
            transform="translate(440 802)"
          >
            <circle cx="9" cy="9" r="8.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[14]}
            data-name="Ellipse 23"
            transform="translate(532 941)"
          >
            <circle cx="9" cy="9" r="8.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[15]}
            data-name="Ellipse 21"
            transform="translate(532 835)"
          >
            <circle cx="9" cy="9" r="8.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[16]}
            data-name="Ellipse 18"
            transform="translate(417 853)"
          >
            <circle cx="9" cy="9" r="8.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[17]}
            data-name="Ellipse 20"
            transform="translate(363 923)"
          >
            <circle cx="9" cy="9" r="8.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[18]}
            data-name="Ellipse 19"
            transform="translate(354 828)"
          >
            <circle cx="9" cy="9" r="8.5" fill={theme.color2}></circle>
          </animated.g>
          <animated.g
            style={animations[19]}
            data-name="Ellipse 17"
            transform="translate(458 895)"
          >
            <circle cx="9.5" cy="9.5" r="9" fill={theme.color2}></circle>
          </animated.g>

          <animated.g
            style={animations[20]}
            data-name="Ellipse 22"
            transform="translate(496 792)"
          >
            <circle cx="9.5" cy="9.5" r="9" fill={theme.color2}></circle>
          </animated.g>
        </g>
      </svg>
    </div>
  );
}

export default Bubbles;

import { useEffect } from "react";
import { animated, useSprings } from "react-spring";

// this components provide radio button like functionality but with underline animations
// selected:string , setSelected: setter callback , options string[]

const Selector = ({ selected, setSelected, options }) => {
  const [optionAnimations, api] = useSprings(options.length || 0, (ind) => ({
    to: {
      height: "2px",
      opacity: 0,
    },
  }));
  useEffect(() => {
    api.start((ind) => ({
      to: {
        opacity: options[ind] === selected ? 1 : 0,
      },
    }));
    return () => {
      api.stop();
    };
  }, [selected]);

  return (
    <div className="">
      <div className="flex ">
        {options &&
          options.map((option, ind) => (
            <button
              key={option}
              className="mx-10 focus:outline-none"
              onClick={() => {
                setSelected(option);
              }}
            >
              <p className="text-cream md:text-xl">{option}</p>
              <animated.div
                style={optionAnimations[ind]}
                className="bg-cream w-full mt-1"
              ></animated.div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Selector;

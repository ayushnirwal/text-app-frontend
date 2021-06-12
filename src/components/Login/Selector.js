import { useEffect } from "react";
import { animated, useSprings } from "react-spring";

// this components provide radio button like functionality but with underline animations
// selected:string , setSelected: setter callback , options string[]

const Selector = ({ selected, setSelected, options }) => {
  const [optionAnimations, api] = useSprings(options.length || 0, (ind) => ({
    to: {
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
            <div
              key={option}
              className="mx-10 "
              onClick={() => {
                setSelected(option);
              }}
            >
              <p className="font-bold text-cream md:text-2xl">{option}</p>
              <animated.div
                style={optionAnimations[ind]}
                className="bg-cream w-full h-1 mt-1"
              ></animated.div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Selector;

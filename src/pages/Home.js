import useBreakPoints from "../cutomHooks/useBreakPoints";

const Home = () => {
  const device = useBreakPoints();
  return (
    <div
      className={`w-screen h-screen ${
        device === "big-screen" ||
        device === "small-screen" ||
        device === "tablet"
          ? "p-10"
          : ""
      }`}
    >
      <div
        className={`w-full h-full bg-green-300  rounded-2xl grid ${
          device === "big-screen" ||
          device === "small-screen" ||
          device === "tablet"
            ? "grid-cols-12 grid-rows-6"
            : "grid-cols-2 grid-rows-12"
        }`}
      >
        <div
          className={`w-full h-full bg-red-200 flex justify-center items-center ${
            device === "big-screen" ||
            device === "small-screen" ||
            device === "tablet"
              ? "col-span-4 row-span-6"
              : ""
          }`}
        >
          Side menu
        </div>
      </div>
    </div>
  );
};

export default Home;

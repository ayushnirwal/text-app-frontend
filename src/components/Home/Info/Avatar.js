import useTheme from "../../../cutomHooks/useTheme";

const Avatar = () => {
  const { theme } = useTheme();
  return (
    <div
      className="w-36 h-36 rounded-full"
      style={{ backgroundColor: theme.color2 }}
    ></div>
  );
};

export default Avatar;

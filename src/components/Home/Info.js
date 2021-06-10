import useTheme from "../../cutomHooks/useTheme";
import useUser from "../../cutomHooks/useUser";
import Avatar from "./Info/Avatar";
const Info = () => {
  const { user } = useUser();
  const { theme } = useTheme();
  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <Avatar />
      <h1 className="text-2xl font-bold" style={{ color: theme.color3 }}>
        {user.name}
      </h1>
    </div>
  );
};

export default Info;

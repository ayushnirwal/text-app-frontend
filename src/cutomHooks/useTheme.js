import { useDispatch, useSelector } from "react-redux";
import { setSelectedTheme } from "../redux/theme/themeSlice";

const useTheme = () => {
  const theme = useSelector(
    (state) => state.theme.themeList[state.theme.selectedTheme]
  );
  const themeList = useSelector((state) => state.theme.themeList);

  const dispatch = useDispatch();
  const changeTheme = (newIndex) => {
    try {
      const maxIndex = themeList.length - 1;
      if (newIndex > maxIndex) {
        throw new Error({ message: "index out of range" });
      }
      dispatch(setSelectedTheme(newIndex));
    } catch (error) {
      console.log(error);
    }
  };
  return { theme, changeTheme };
};

export default useTheme;

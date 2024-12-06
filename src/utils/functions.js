import { ThemeColors } from "../theme/colors";
import { statusTypes } from "./constant";

const setColor = status => {
  switch (status) {
    case statusTypes.COMPLATED:return ThemeColors.green;
    case statusTypes.INPROGRESS: return ThemeColors.blue;
    case statusTypes.ONHOLD: return ThemeColors.yellow;
    case statusTypes.INREVIEW: return ThemeColors.pink;
    default: return ThemeColors.white;
  }
}

export { setColor };

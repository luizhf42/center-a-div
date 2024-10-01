import { HorizontalAlignment } from "../../types/element";

const marginValues = {
	left: ["0", "auto"],
	center: ["auto", "auto"],
	right: ["auto", "0"],
};

const getMarginCode = (horizontalAlignment: HorizontalAlignment) => {
  const [marginLeft, marginRight] = marginValues[horizontalAlignment];  
  return `margin-left: ${marginLeft};
  margin-right: ${marginRight};`;
};

export default getMarginCode;

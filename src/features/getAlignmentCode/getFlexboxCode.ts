import { HorizontalAlignment, VerticalAlignment } from "../../types/element";

const verticalFlexValues = {
	top: "flex-start",
	middle: "center",
	bottom: "flex-end",
};
const horizontalFlexValues = {
	left: "flex-start",
	center: "center",
	right: "flex-end",
};

const getFlexboxCode = (
	verticalAlignment: VerticalAlignment,
	horizontalAlignment: HorizontalAlignment
) =>
	`display: flex;
  align-items: ${verticalFlexValues[verticalAlignment]};
  justify-content: ${horizontalFlexValues[horizontalAlignment]};`;
  
export default getFlexboxCode;

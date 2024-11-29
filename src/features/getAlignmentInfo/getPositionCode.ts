import { HorizontalAlignment, VerticalAlignment } from "../../types/element";

const verticalInsetValues = {
	top: ["0", "auto"],
	middle: ["0", "0"],
	bottom: ["auto", "0"],
};
const horizontalInsetValues = {
	left: ["0", "auto"],
	center: ["0", "0"],
	right: ["auto", "0"],
};

const getPositionCode = (
	verticalAlignment: VerticalAlignment,
	horizontalAlignment: HorizontalAlignment
) => {
	const inset = getInsetValue(verticalAlignment, horizontalAlignment);

	return `position: fixed;
  margin: auto;
  inset: ${inset};`;
};

const getInsetValue = (
	verticalAlignment: VerticalAlignment,
	horizontalAlignment: HorizontalAlignment
) => {
	const [top, bottom] = verticalInsetValues[verticalAlignment];
	const [left, right] = horizontalInsetValues[horizontalAlignment];
	const inset = `${top} ${right} ${bottom} ${left}`;

	if (!inset.includes("auto")) {
		return "0";
	} else if (!inset.includes("0")) {
		return "auto";
	}
	return inset;
};

export default getPositionCode;

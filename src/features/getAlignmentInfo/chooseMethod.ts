import { Element, VerticalAlignment } from "../../types/element";

type Method = "margin" | "flexbox" | "position";

const chooseMethod = (
	element: Element,
	verticalAlignment: VerticalAlignment
): Method => {
	if (element === "dialog") {
		return "position";
	} else if (verticalAlignment === "top") {
		return "margin";
	}
	return "flexbox";
};

export default chooseMethod;

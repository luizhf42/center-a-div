import { Element, VerticalAlignment } from "../../types/element";

type Method = "margin" | "flexbox";

const chooseMethod = (element: Element, verticalAlignment: VerticalAlignment): Method => {
	if (element !== "dialog" && verticalAlignment === "top") {
		return "margin";
	}
	return "flexbox";
};

export default chooseMethod;
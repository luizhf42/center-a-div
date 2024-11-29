import { useElementStore } from "../../stores/element";
import chooseMethod from "./chooseMethod";
import getFlexboxCode from "./getFlexboxCode";
import getMarginCode from "./getMarginCode";
import getPositionCode from "./getPositionCode";
import getSizeCode from "./getSizeCode";

const classNames = {
	flexbox: "parent",
	margin: "element",
	position: "element",
};

const messages = {
	flexbox: "Use Flexbox! Add that snippet to the parent of your element.",
	margin: "Use flow layout! Add that snippet to your element.",
	position: "Use fixed positioning! Add that snippet to your element.",
};

const getAlignmentInfo = () => {
	const { element, verticalAlignment, horizontalAlignment, textAlignment } =
		useElementStore();
	const method = chooseMethod(element, verticalAlignment);

	const elementAlignment = {
		flexbox: getFlexboxCode(verticalAlignment, horizontalAlignment),
		margin: getMarginCode(horizontalAlignment),
		position: getPositionCode(verticalAlignment, horizontalAlignment),
	}[method];

	const message = messages[method];
	const properties = [elementAlignment, ...getSizeCode()];

	if (element === "text") properties.push(`text-align: ${textAlignment};`);

	const code = `.${classNames[method]} {
  ${properties.join("\n  ")}
}`;

	return { message, code };
};

export default getAlignmentInfo;

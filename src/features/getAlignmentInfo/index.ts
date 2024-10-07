import { useElementStore } from "../../stores/element";
import chooseMethod from "./chooseMethod";
import getFlexboxCode from "./getFlexboxCode";
import getMarginCode from "./getMarginCode";

const classNames = {
	flexbox: "parent",
	margin: "element",
};

const messages = {
	flexbox: "Use Flexbox! Add that snippet to the parent of your element.",
	margin: "Use flow layout! Add that snippet to your element.",
};

const getAlignmentInfo = () => {
	const { element, verticalAlignment, horizontalAlignment } = useElementStore();
	const method = chooseMethod(element, verticalAlignment);

	const styles = {
		flexbox: getFlexboxCode(verticalAlignment, horizontalAlignment),
		margin: getMarginCode(horizontalAlignment),
	}[method];
	
	const message = messages[method];
	const code = `.${classNames[method]} {
  ${styles}
}`;

	return { message, code };
};

export default getAlignmentInfo;

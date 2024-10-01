import { useElementStore } from "../../stores/element";
import chooseMethod from "./chooseMethod";
import getFlexboxCode from "./getFlexboxCode";
import getMarginCode from "./getMarginCode";

const getAlignmentCode = () => {
	const { element, verticalAlignment, horizontalAlignment } = useElementStore();
	const method = chooseMethod(element, verticalAlignment);

	const className = method === "flexbox" ? "parent" : "element";
	const styles =
		method === "flexbox"
			? getFlexboxCode(verticalAlignment, horizontalAlignment)
			: getMarginCode(horizontalAlignment);
	return `.${className} {
  ${styles}
}`;
};

export default getAlignmentCode;

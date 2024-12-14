import { useElementStore } from "../../stores/element";
import chooseMethod from "./chooseMethod";
import FlexboxAlignment from "./FlexboxAlignment";
import PositionAlignment from "./PositionAlignment";
import MarginAlignment from "./MarginAlignment";

const messages = {
	flexbox: "Use Flexbox! Add that snippet to the parent of your element.",
	margin: "Use flow layout! Add that snippet to your element.",
	position: "Use fixed positioning! Add that snippet to your element.",
};

const getAlignmentInfo = () => {
	const {
		element,
		verticalAlignment,
		horizontalAlignment,
		textAlignment,
		size,
	} = useElementStore();
	const method = chooseMethod(element, verticalAlignment);

	const alignmentClass = {
		flexbox: FlexboxAlignment,
		margin: MarginAlignment,
		position: PositionAlignment,
	}[method];

	const alignmentInstance = new alignmentClass!(
		verticalAlignment,
		horizontalAlignment,
		size,
		textAlignment,
		element
	);
	const code = alignmentInstance.generateCode();
	const explanation = alignmentInstance.getExplanation();
	const message = messages[method];

	return { code, explanation, message };
};

export default getAlignmentInfo;

import { useElementStore } from "../../stores/element";
import chooseMethod from "./chooseMethod";
import FlexboxAlignment from "./FlexboxAlignment";
import PositionAlignment from "./PositionAlignment";
import MarginAlignment from "./MarginAlignment";

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

	return { code, explanation };
};

export default getAlignmentInfo;

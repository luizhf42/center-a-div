import { useElementStore } from "../../stores/element";

const getSizeCode = () => {
	const { size } = useElementStore();
	const { width, height } = size;

	let sizeProperties = [];
	if (width) sizeProperties.push(`width: ${width};`);
	if (height) sizeProperties.push(`height: ${height};`);
  
	return sizeProperties;
};

export default getSizeCode;

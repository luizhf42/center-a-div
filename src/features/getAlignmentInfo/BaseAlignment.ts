import {
	Element,
	HorizontalAlignment,
	Size,
	TextAlignment,
	VerticalAlignment,
} from "../../types/element";

class BaseAlignment {
	verticalAlignment: VerticalAlignment;
	horizontalAlignment: HorizontalAlignment;
	size: Size;
	textAlignment: TextAlignment;
	element: Element;

	constructor(
		verticalAlignment: VerticalAlignment,
		horizontalAlignment: HorizontalAlignment,
		size: Size,
		textAlignment: TextAlignment,
		element: Element
	) {
		this.verticalAlignment = verticalAlignment;
		this.horizontalAlignment = horizontalAlignment;
		this.size = size;
		this.textAlignment = textAlignment;
		this.element = element;
	}

	generateCode() {
		throw new Error("generateCode method must be implemented in subclasses");
	}

	getExplanation() {
		throw new Error("getExplanation method must be implemented in subclasses");
	}

	generateSizeCode() {
		const { width, height } = this.size;

		return [
			width ? `width: ${width};` : null,
			height ? `height: ${height};` : null,
		].filter(Boolean);
	}

	getSizeAndTextProperties() {
		const properties = [...this.generateSizeCode()];
		if (this.element === "text") {
			properties.push(`text-align: ${this.textAlignment};`);
		}
		return properties;
	}
}

export default BaseAlignment;

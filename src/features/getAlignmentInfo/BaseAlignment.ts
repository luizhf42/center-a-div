import CSSTree from "../../types/cssTree";
import {
	Element,
	HorizontalAlignment,
	Size,
	TextAlignment,
	VerticalAlignment,
} from "../../types/element";

class BaseAlignment {
	protected verticalAlignment: VerticalAlignment;
	protected horizontalAlignment: HorizontalAlignment;
	protected size: Size;
	protected textAlignment: TextAlignment;
	protected element: Element;

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

	protected generateAST(): CSSTree {
		throw new Error("generateAST method must be implemented in subclasses");
	}

	private transformASTToCSS(tree: CSSTree, indent = 0): string {
		const spaces = "  ".repeat(indent);

		const declarations = Object.entries(tree.declarations)
			.map(([property, value]) => `${spaces}  ${property}: ${value};`)
			.join("\n");

		const children = (tree.children || [])
			.map((child) => this.transformASTToCSS(child, indent + 1))
			.join("\n");

		return `${spaces}${tree.selector} {\n${declarations}\n${
			children ? `\n${children}\n${spaces}` : ""
		}${spaces}}`;
	}

	getCSSCode() {
		const tree = this.generateAST();
		return this.transformASTToCSS(tree);
	}

	getExplanation() {
		throw new Error("getExplanation method must be implemented in subclasses");
	}

	protected getSizeDeclarations(): Record<string, string> {
		const { width, height } = this.size;
		const declarations: Record<string, string> = {};

		if (width) declarations["width"] = width;
		if (height) declarations["height"] = height;

		return declarations;
	}

	protected getTextAlignmentDeclaration(): Record<string, string> {
		return this.element === "text" ? { "text-align": this.textAlignment } : {};
	}
}

export default BaseAlignment;

import CSSTree from "../../types/cssTree";
import BaseAlignment from "./BaseAlignment";

class PositionAlignment extends BaseAlignment {
	private verticalInsetMapping = {
		top: ["0", "auto"],
		middle: ["0", "0"],
		bottom: ["auto", "0"],
	};

	private horizontalInsetMapping = {
		left: ["0", "auto"],
		center: ["0", "0"],
		right: ["auto", "0"],
	};

	generateAST(): CSSTree {
		const inset = this.getInsetValue();

		const declarations: Record<string, string> = {
			position: "fixed",
			margin: "auto",
			inset,
			...this.getSizeDeclarations(),
			...this.getTextAlignmentDeclaration(),
		};

		return {
			selector: ".element",
			declarations,
		};
	}

	getExplanation() {
		const [top, bottom] = this.verticalInsetMapping[this.verticalAlignment];
		const [left, right] = this.horizontalInsetMapping[this.horizontalAlignment];

		const explanationItems = [];

		explanationItems.push(
			"<code>position: fixed</code> places the element relative to the viewport, exactly what is needed for a dialog."
		);

		explanationItems.push(
			`<code>inset</code> is a shorthand property for <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.`
		);

		const insetValues: {
			top?: string;
			right?: string;
			bottom?: string;
			left?: string;
		} = {
			top,
			right,
			bottom,
			left,
		};

		if (top === "0" && bottom === "0") {
			delete insetValues.top;
			delete insetValues.bottom;
			explanationItems.push(
				"Both <code>top</code> and <code>bottom</code> are <code>0</code>, centering the element vertically."
			);
		}

		if (left === "0" && right === "0") {
			delete insetValues.left;
			delete insetValues.right;
			explanationItems.push(
				"Both <code>left</code> and <code>right</code> are <code>0</code>, centering the element horizontally."
			);
		}

		Object.entries(insetValues).forEach(([key, value]) => {
			if (value === "0") {
				explanationItems.push(
					`<code>${key}: 0;</code> pulls the element to the ${key} edge of the viewport.`
				);
			}
		});

		if (Object.values(insetValues).includes("auto")) {
			explanationItems.push(
				`The <code>auto</code> value just completes the shorthand, adapting dynamically to the other edges' values.`
			);
		}

		explanationItems.push(
			"The <code>margin: auto</code> is a trick to help pushing the element to the desired position."
		);

		explanationItems.push(
			"The size here is mandatory to prevent an unexpected behavior from the inset, that, in some cases, can stretch the element!"
		);

		if (this.element === "text") {
			explanationItems.push(
				`The <code>text-align</code> does his job aligning the text (not the block!) to the ${this.textAlignment}.`
			);
		}

		return {
			title: "Aligning a dialog relative to the viewport",
			items: explanationItems,
		};
	}

	getInsetValue() {
		const [top, bottom] = this.verticalInsetMapping[this.verticalAlignment];
		const [left, right] = this.horizontalInsetMapping[this.horizontalAlignment];
		const inset = `${top} ${right} ${bottom} ${left}`;

		return inset.includes("auto") ? inset : "0";
	}
}

export default PositionAlignment;

import BaseAlignment from "./BaseAlignment";

class MarginAlignment extends BaseAlignment {
	private marginMapping = {
		left: ["0", "auto"],
		center: ["auto", "auto"],
		right: ["auto", "0"],
	};
	generateCode() {
		const [marginLeft, marginRight] =
			this.marginMapping[this.horizontalAlignment];
		const properties = [
			`margin-left: ${marginLeft};`,
			`margin-right: ${marginRight};`,
			...this.getSizeAndTextProperties(),
		];
		return `.element {
  ${properties.join("\n  ")}
}`;
	}

	getExplanation() {
		const [marginLeft, marginRight] =
			this.marginMapping[this.horizontalAlignment];

		const explanationItems = [];

		explanationItems.push(
			"This CSS uses margins to align the element horizontally."
		);

		if (marginLeft === "auto" && marginRight === "auto") {
			explanationItems.push(
				"Both <code>margin-left</code> and <code>margin-right</code> are set to <code>auto</code>, creating equal spacing on both sides and centering the element horizontally."
			);
		} else if (marginLeft === "0" && marginRight === "auto") {
			explanationItems.push(
				"<code>margin-right: auto;</code> pushes the element directly to the left edge, while <code>margin-left: 0;</code> prevents any spacing or unexpected behavior."
			);
		} else
			explanationItems.push(
				"<code>margin-left: auto;</code> pushes the element directly to the right edge, while <code>margin-right: 0;</code> prevents any spacing or unexpected behavior."
			);

		if (this.element === "text") {
			explanationItems.push(
				`The <code>text-align</code> does his job aligning the text (not the block!) to the ${this.textAlignment}.`
			);
		}

		return {
			title: "Aligning an element horizontally using margins",
			items: explanationItems,
		};
	}
}

export default MarginAlignment;

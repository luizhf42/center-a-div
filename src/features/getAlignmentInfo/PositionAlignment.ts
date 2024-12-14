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

	generateCode() {
		const inset = this.getInsetValue();
		return `.element {
  position: fixed;
  margin: auto;
  inset: ${inset};
  ${this.getSizeAndTextProperties().join("\n  ")}
}`;
	}

	getExplanation() {
		return `This CSS uses fixed positioning.
- \`position: fixed\` places the element relative to the viewport.
- \`inset\` sets the distance from edges (calculated as ${this.getInsetValue()}).`;
	}
	getInsetValue() {
		const [top, bottom] = this.verticalInsetMapping[this.verticalAlignment];
		const [left, right] = this.horizontalInsetMapping[this.horizontalAlignment];
		const inset = `${top} ${right} ${bottom} ${left}`;

		if (!inset.includes("auto")) {
			return "0";
		} else if (!inset.includes("0")) {
			return "auto";
		}

		return inset;
	}
}

export default PositionAlignment;

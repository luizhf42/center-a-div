import BaseAlignment from "./BaseAlignment";

class FlexboxAlignment extends BaseAlignment {
	private verticalAlignmentMapping = {
		top: "flex-start",
		middle: "center",
		bottom: "flex-end",
	};
	private horizontalAlignmentMapping = {
		left: "flex-start",
		center: "center",
		right: "flex-end",
	};
	generateCode() {
		return `.parent {
  display: flex;
  align-items: ${this.verticalAlignmentMapping[this.verticalAlignment]};
  justify-content: ${this.horizontalAlignmentMapping[this.horizontalAlignment]};
	
  .element {
    ${this.getSizeAndTextProperties().join("\n    ")}
  }
}`;
	}

	getExplanation() {
		return `This CSS uses Flexbox layout.
- \`align-items\` aligns the element vertically (${
			this.verticalAlignmentMapping[this.verticalAlignment]
		}).
- \`justify-content\` aligns the element horizontally (${
			this.horizontalAlignmentMapping[this.horizontalAlignment]
		}).`;
	}
}

export default FlexboxAlignment;

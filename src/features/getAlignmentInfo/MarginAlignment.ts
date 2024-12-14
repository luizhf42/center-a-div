import BaseAlignment from "./BaseAlignment";

class MarginAlignment extends BaseAlignment {
  private marginMapping = {
    left: ["0", "auto"],
    center: ["auto", "auto"],
    right: ["auto", "0"],
  }
  generateCode() {
    const [marginLeft, marginRight] = this.marginMapping[this.horizontalAlignment];
    return `.element {
  margin-left: ${marginLeft};
  margin-right: ${marginRight};
  ${this.getSizeAndTextProperties().join("\n  ")}
}`;
  }

  getExplanation() {
    return `This CSS uses margins to align the element horizontally.
- \`margin-left\` and \`margin-right\` are set to create spacing (${this.marginMapping[this.horizontalAlignment][0]} and ${this.marginMapping[this.horizontalAlignment][1]} respectively).`;
  }
}

export default MarginAlignment;

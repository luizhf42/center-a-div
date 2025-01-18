type Selector = ".element" | ".parent";

type CSSTree = {
	selector: Selector;
	declarations: Record<string, string>;
	children?: CSSTree[];
};

export default CSSTree;

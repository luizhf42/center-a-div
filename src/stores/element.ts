import { defineStore } from "pinia";
import {
	Dimension,
	Element,
	HorizontalAlignment,
	Size,
	TextAlignment,
	VerticalAlignment,
} from "../types/element";
import { ref } from "vue";

export const useElementStore = defineStore("element", () => {
	const element = ref<Element>("div");
	const verticalAlignment = ref<VerticalAlignment>("top");
	const horizontalAlignment = ref<HorizontalAlignment>("left");
	const textAlignment = ref<TextAlignment>("left");
	const size = ref<Size>({
		width: "42%",
		height: "42%",
	});

	const resetValues = () => {
		element.value = "div";
		verticalAlignment.value = "top";
		horizontalAlignment.value = "left";
		textAlignment.value = "left";
		size.value = {
			width: "42%",
			height: "42%",
		};
	};

	const updateElement = (newElement: Element) => (element.value = newElement);
	const updateVerticalAlignment = (newAlignment: VerticalAlignment) =>
		(verticalAlignment.value = newAlignment);
	const updateHorizontalAlignment = (newAlignment: HorizontalAlignment) =>
		(horizontalAlignment.value = newAlignment);
	const updateTextAlignment = (newAlignment: TextAlignment) =>
		(textAlignment.value = newAlignment);
	const updateSize = (dimension: Dimension, valueWithUnit?: string) =>
		(size.value[dimension] = valueWithUnit);

	return {
		resetValues,
		element,
		verticalAlignment,
		horizontalAlignment,
		textAlignment,
		size,
		updateElement,
		updateVerticalAlignment,
		updateHorizontalAlignment,
		updateTextAlignment,
		updateSize,
	};
});

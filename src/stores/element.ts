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
	const textAlignment = ref<TextAlignment>();
	const size = ref<Size>({
		width: "42%",
		height: "42%",
	});

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

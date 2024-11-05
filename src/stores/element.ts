import { defineStore } from "pinia";
import {
	Element,
	HorizontalAlignment,
	TextAlignment,
	VerticalAlignment,
} from "../types/element";
import { ref } from "vue";

export const useElementStore = defineStore("element", () => {
	const element = ref<Element>("div");
	const verticalAlignment = ref<VerticalAlignment>("top");
	const horizontalAlignment = ref<HorizontalAlignment>("left");
	const textAlignment = ref<TextAlignment>();

	const updateElement = (newElement: Element) => (element.value = newElement);
	const updateVerticalAlignment = (newAlignment: VerticalAlignment) =>
		(verticalAlignment.value = newAlignment);
	const updateHorizontalAlignment = (newAlignment: HorizontalAlignment) =>
		(horizontalAlignment.value = newAlignment);
	const updateTextAlignment = (newAlignment: TextAlignment) =>
		(textAlignment.value = newAlignment);

	return {
		element,
		verticalAlignment,
		horizontalAlignment,
		textAlignment,
		updateElement,
		updateVerticalAlignment,
		updateHorizontalAlignment,
		updateTextAlignment
	};
});

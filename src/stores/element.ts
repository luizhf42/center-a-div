import { defineStore } from "pinia";
import {
	Element,
	HorizontalAlignment,
	VerticalAlignment,
} from "../types/element";
import { ref } from "vue";

export const useElementStore = defineStore("element", () => {
	const element = ref<Element>("div");
	const verticalAlignment = ref<VerticalAlignment>("top");
	const horizontalAlignment = ref<HorizontalAlignment>("left");

	const updateElement = (newElement: Element) => (element.value = newElement);
	const updateVerticalAlignment = (newAlignment: VerticalAlignment) =>
		(verticalAlignment.value = newAlignment);
	const updateHorizontalAlignment = (newAlignment: HorizontalAlignment) =>
		(horizontalAlignment.value = newAlignment);

	return { updateElement, updateVerticalAlignment, updateHorizontalAlignment };
});

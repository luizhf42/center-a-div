import { defineStore } from "pinia";
import {
	Element,
	HorizontalAlignment,
	VerticalAlignment,
} from "../models/element";
import { ref } from "vue";

export const useElementStore = defineStore("element", () => {
	const element = ref(Element.Div);
	const verticalAlignment = ref(VerticalAlignment.Top);
	const horizontalAlignment = ref(HorizontalAlignment.Left);

	const updateElement = (newElement: Element) => (element.value = newElement);
	const updateVerticalAlignment = (newAlignment: VerticalAlignment) =>
		(verticalAlignment.value = newAlignment);
	const updateHorizontalAlignment = (newAlignment: HorizontalAlignment) =>
		(horizontalAlignment.value = newAlignment);

	return { updateElement, updateVerticalAlignment, updateHorizontalAlignment };
});

import sanitize from 'sanitize-html';
import { Directive } from 'vue';

interface DirectiveValue {
  html: string;
  options?: sanitize.IOptions;
}

export const vSanitizeHtml: Directive<HTMLElement, DirectiveValue> = {
  mounted(el, binding) {
    const saveHtml = sanitize(binding.value.html, binding.value.options);
    el.innerHTML = saveHtml;
  },
};

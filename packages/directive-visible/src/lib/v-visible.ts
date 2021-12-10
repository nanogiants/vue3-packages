import { DirectiveBinding, Directive } from 'vue';

const update = (el: HTMLElement, binding: DirectiveBinding<boolean>) => {
  el.style.visibility = binding.value ? 'visible' : 'hidden';
};

export const vVisible: Directive<HTMLElement, boolean> = {
  beforeMount(el, binding) {
    update(el, binding);
  },
  updated(el, binding) {
    update(el, binding);
  },
};

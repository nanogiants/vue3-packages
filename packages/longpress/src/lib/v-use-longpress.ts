import { DirectiveBinding, ObjectDirective } from 'vue';

type BindingValue = number;

interface ExtendedDirective extends ObjectDirective<HTMLElement, BindingValue> {
  pointerdownEvent: (e: PointerEvent) => void;
  pointerupEvent: (e: PointerEvent) => void;
  timeout: ReturnType<typeof setTimeout> | null;
}

const pointerdownEvent = (el: HTMLElement, binding: DirectiveBinding<BindingValue>, e: PointerEvent) => {
  e.preventDefault();
  const delay = binding.value ?? 500;
  const dir = getDir(binding);
  dir.timeout = setTimeout(() => el.dispatchEvent(new CustomEvent('longpress')), delay);
};

const pointerupEvent = (binding: DirectiveBinding<BindingValue>, e: PointerEvent) => {
  e.preventDefault();
  const dir = getDir(binding);
  if (dir.timeout !== null) {
    clearTimeout(dir.timeout);
  }
};

const getDir = (binding: DirectiveBinding<number>) => {
  return binding.dir as ExtendedDirective;
};

export const vLongpress: ExtendedDirective = {
  pointerdownEvent: () => ({}),
  pointerupEvent: () => ({}),
  timeout: null,
  mounted(el, binding) {
    const dir = getDir(binding);
    dir.pointerdownEvent = (e: PointerEvent) => pointerdownEvent(el, binding, e);
    dir.pointerupEvent = (e: PointerEvent) => pointerupEvent(binding, e);
    el.addEventListener('pointerdown', dir.pointerdownEvent);
    el.addEventListener('pointerup', dir.pointerupEvent);
    el.addEventListener('pointermove', dir.pointerupEvent);
  },
  beforeUnmount(el, binding) {
    const dir = getDir(binding);
    el.removeEventListener('pointerdown', dir.pointerdownEvent);
    el.removeEventListener('pointerup', dir.pointerupEvent);
    el.removeEventListener('pointermove', dir.pointerupEvent);
  },
};

import { mount, VueWrapper } from '@vue/test-utils';
import { defineComponent } from 'vue';

import { vLongpress } from './v-use-longpress';

const App = defineComponent({
  props: {
    onLongpress: {
      type: Function,
      required: true,
    },
  },

  template: `<template>
  <div data-test="element" v-use-longpress @longpress="onLongpress">Content</div>
  </template>
  `,
});

const sleep = (ms: number) => new Promise((r) => setTimeout(() => r(true), ms));

describe('vLongpress', () => {
  let onLongpress = jest.fn();
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    onLongpress = jest.fn();
    wrapper = mount(App, {
      global: {
        directives: {
          'use-longpress': vLongpress,
        },
      },
      props: {
        onLongpress,
      },
    });
  });

  it('should trigger"', async () => {
    const element = wrapper.get('[data-test=element]');
    await element.trigger('pointerdown');
    await sleep(600);
    await element.trigger('pointerup');
    expect(onLongpress).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
  it('should not trigger"', async () => {
    const element = wrapper.get('[data-test=element]');
    await element.trigger('pointerdown');
    await sleep(200);
    await element.trigger('pointerup');
    expect(onLongpress).toHaveBeenCalledTimes(0);
    wrapper.unmount();
  });
});

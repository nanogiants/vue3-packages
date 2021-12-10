import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';

import { vVisible } from './v-Visible';

const App = defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },

  template: `<template>
  <div data-test="element" v-visible="visible">Content</div>
  </template>
  `,
});

describe('vVisible', () => {
  describe('its visible', () => {
    const wrapper = mount(App, {
      global: {
        directives: {
          visible: vVisible,
        },
      },
      props: {
        visible: true,
      },
    });
    it('should be visible"', async () => {
      const element = wrapper.get('[data-test=element]');
      expect(element.attributes().style).toEqual('visibility: visible;');
      await wrapper.setProps({ visible: false });
      expect(element.attributes().style).toEqual('visibility: hidden;');
    });
  });
  describe('its not visible', () => {
    const wrapper = mount(App, {
      global: {
        directives: {
          visible: vVisible,
        },
      },
      props: {
        visible: false,
      },
    });
    it('should not be visible"', async () => {
      const element = wrapper.get('[data-test=element]');
      expect(element.attributes().style).toEqual('visibility: hidden;');
      await wrapper.setProps({ visible: true });
      expect(element.attributes().style).toEqual('visibility: visible;');
    });
  });
});

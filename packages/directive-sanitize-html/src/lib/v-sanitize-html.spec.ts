import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';

import { vSanitizeHtml } from './v-sanitize-html';

const App = defineComponent({
  props: {
    html: {
      type: String,
      required: true,
    },
  },

  template: `<template>
  <div data-test="element" v-sanitize-html="{ html }"></div>
  <div data-test="element2" v-html="html"></div>
  </template>
  `,
});

const getHtmlString = (injected: string) => `<div><span>Test</span>${injected}</div>`;
const maliciousHtmlString = '<img src="X" onerror="alert(document.domain)">';

describe('vSanitizeHtml', () => {
  describe('given no options', () => {
    const wrapper = mount(App, {
      global: {
        directives: {
          'sanitize-html': vSanitizeHtml,
        },
      },
      props: {
        html: getHtmlString(maliciousHtmlString),
      },
    });
    it('should sanitize input"', async () => {
      const element = wrapper.get('[data-test=element]');
      expect(element.element.innerHTML).toEqual(getHtmlString(''));
      const element2 = wrapper.get('[data-test=element2]');
      expect(element2.element.innerHTML).toEqual(getHtmlString(maliciousHtmlString));
    });
  });
});

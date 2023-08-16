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

describe('vSanitizeHtml', () => {
  describe('given malicious strings', () => {
    const maliciousHtmlString = '<img src="X" onerror="alert(document.domain)">';
    const maliciousHtmlString2 = '<img src="Y" onerror="alert(document.domain)">';
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
      it('should sanitize input when string is updated"', async () => {
        const element = wrapper.get('[data-test=element]');
        const element2 = wrapper.get('[data-test=element2]');
        expect(element.element.innerHTML).toEqual(getHtmlString(''));
        expect(element2.element.innerHTML).toEqual(getHtmlString(maliciousHtmlString));
        await wrapper.setProps({ html: getHtmlString(maliciousHtmlString2) });
        expect(element.element.innerHTML).toEqual(getHtmlString(''));
        expect(element2.element.innerHTML).toEqual(getHtmlString(maliciousHtmlString2));
      });
    });
  });
  describe('given ok strings', () => {
    const okHtmlString = '<div>Hello World!</div>';
    const okHtmlString2 = '<div>Hello World 2!</div>';
    const wrapper = mount(App, {
      global: {
        directives: {
          'sanitize-html': vSanitizeHtml,
        },
      },
      props: {
        html: getHtmlString(okHtmlString),
      },
    });
    it('should update input"', async () => {
      const element = wrapper.get('[data-test=element]');
      const element2 = wrapper.get('[data-test=element2]');
      expect(element.element.innerHTML).toEqual(getHtmlString(okHtmlString));
      expect(element2.element.innerHTML).toEqual(getHtmlString(okHtmlString));
      await wrapper.setProps({ html: getHtmlString(okHtmlString2) });
      expect(element.element.innerHTML).toEqual(getHtmlString(okHtmlString2));
      expect(element2.element.innerHTML).toEqual(getHtmlString(okHtmlString2));
    });
  });
});

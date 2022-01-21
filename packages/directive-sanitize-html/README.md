
# vue3-sanitize-html
This package contains a Vue 3 directive which adds v-sanitize-html to an element. 

## Installation

```bash
npm i sanitize-html
npm i @nanogiants/vue3-sanitize-html
#optional
npm i @types/sanitize-html -D
# or
yarn add sanitize-html
yarn add @nanogiants/vue3-sanitize-html
# optional
yarn add @types/sanitize-html -D
```

## Usage

#### **`main.ts`**
```ts
import { vSanitizeHtml } from '@nanogiants/vue3-sanitize-html';
import App from './App.vue';

const app = createApp(App);
app.directive('sanitize-html', vSanitizeHtml);
```

#### **`component.vue`**
```ts
<template>
  <div v-sanitize-html="{ html }">test</div>
</template>

<script setup lang="ts">
const html = '<div><span>Test</span><img src="X" onerror="alert(document.domain)"></div>';
</script>
```

#### **`component.vue`** with options
```ts
<template>
  <div v-sanitize-html="{ html, options }">test</div>
</template>

<script setup lang="ts">
import sanitize from 'sanitize-html';

const html = '<div><span>Test</span><img src="X" onerror="alert(document.domain)"></div>';
const options: sanitize.IOptions = {
  allowedTags: [],
};
</script>
```


## args

| arg         | type                                          |
| ----------- | --------------------------------------------- |
| value       | { html: string, options?: sanitize.IOptions } |


```ts
import sanitize from 'sanitize-html';

const html = '<div>Hello World</div>';
const options: sanitize.IOptions = {
  allowedTags: [],
};

<div v-sanitize-html="{ html, options}"></div>
```


## License

[MIT](https://github.com/nanogiants/vue3-packages/blob/main/LICENSE.md)

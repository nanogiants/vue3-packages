
# vue3-longpress
This package contains a Vue 3 directive which adds the `@longpress` event to an element.

## Installation

```bash
npm i @nanogiants/vue3-longpress
# or
yarn add @nanogiants/vue3-longpress
```

## Usage

```ts
// main.ts file
import { vLongpress } from '@nanogiants/vue3-longpress';
import App from './App.vue';

const app = createApp(App);
app.directive('use-longpress', vLongpress);


// component.ts
<template>
  <div>
    <div v-use-longpress="500" @longpress="onLongpress">Hello World!</div>
    <div v-use-longpress @longpress="onLongpress">Hello World!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const onLongpress = (e: CustomEvent) => {
      console.log('onLongpress', e);
    };
    return { onLongpress };
  },
});
</script>
```

## args

There is only one arg you can pass.  
The duration can be set as an interger in ms. Default is 500. 
```ts
<div v-use-longpress="1000" @longpress="onLongpress"></div>
```


## License

[MIT](https://github.com/nanogiants/vue3-packages/blob/main/LICENSE.md)

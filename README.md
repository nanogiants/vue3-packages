
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
<template>
  <div v-use-longpress="500" @longpress="onLongpress">Hello World!</div>
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

## Contributing

To contribute please fork the repository, create a new branch to make changes on and create a pull request into the develop branch of this repository.  
Remember to write tests (if needed) to get the features approved.

## Feature Requests

For feature requests please use the issuetracker and specify your exact needs. 

## License

[MIT](https://github.com/nanogiants/vue3-packages/blob/main/LICENSE.md)

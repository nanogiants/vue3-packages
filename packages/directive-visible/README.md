
# vue3-visible
This package contains a Vue 3 directive which adds v-visible.  
It differs from `v-if` (not in the DOM) and `v-show` (display: none) by that it sets the elements `visibility` style to `hidden`.

## Installation

```bash
npm i @nanogiants/vue3-visible
# or
yarn add @nanogiants/vue3-visible
```

## Usage

```ts
// main.ts file
import { vVisible } from 'vue3-visible';
app.directive('visible', vVisible);


// component.ts
<template>
  <div>
    <div v-visible="true">Hello World!</div>
    <div v-visible="false">Hello World!</div> // now has style `visibility: hidden`
  </div>
</template>
```

## args

There is only one arg you can pass.  
The boolean value if the element is visible. 



## License

[MIT](https://github.com/nanogiants/vue3-packages/blob/main/LICENSE.md)

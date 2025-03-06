# Unistyles Mock

## Get Started

Download the code to your own project or if you want to:

```bash
pnpm add inkless/unistyles-mock -D
```

Create a `__mocks__/react-native-unistyles.js` in your project root.

```js
// require your theme directly
const theme = require('path/to/theme');

// This is assuming you do support typescript transpile, I didn't transpile to js in this repo
const { createUniStylesMock } = require('path/to/unistyles-mock');

module.exports = createUniStylesMock(theme);
```

# redux-confirm [![npm version](https://badge.fury.io/js/%40jeemyeong%2Fredux-confirm.svg)](https://badge.fury.io/js/%40jeemyeong%2Fredux-confirm)

`redux-confirm` is a Redux middleware for user to control specific actions

### Features

- Written in TypeScript.

## Installation

```sh
$ npm i @jeemyeong/redux-confirm
```

## Configuration

```js
import { applyMiddleware, compose, createStore } from 'redux';
import reduxConfirm from '@jeemyeong/redux-confirm';

import reducer from './store/reducer';

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(reduxConfirm())
);
```

You may also pass options to the `reduxConfirm` function.

#### Available options

```typescript
interface Options {
  confirm?: () => boolean | Promise<boolean>;
  filter?: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: () => void;
}
```

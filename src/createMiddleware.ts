import { Action, Middleware } from 'redux';

interface Options {
  confirm?: () => boolean | Promise<boolean>;
  filter?: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: () => void;
}

const defaultOptions = {
  confirm: () => window.confirm('Are you sure?'),
  filter: () => true,
  rejectedCallback: () => {},
};

export default (rawOptions?: Options): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { confirm, filter, rejectedCallback } = options;

  return () => next => async (action: Action) => {
    const filtered = await filter(action);
    if (filtered) {
      const answer = await confirm();
      if (answer) {
        next(action);
      } else {
        rejectedCallback();
      }
    } else {
      next(action);
    }
  };
};

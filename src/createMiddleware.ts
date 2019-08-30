import { Action, Middleware } from 'redux';

interface Options {
  confirm?: () => boolean | Promise<boolean>;
  filter?: (action: Action) => boolean | Promise<boolean>;
}

const defaultOptions = {
  confirm: () => window.confirm('Are you sure?'),
  filter: () => true,
};

export default (rawOptions?: Options): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { confirm, filter } = options;

  return () => next => async (action: Action) => {
    const filtered = await filter(action);
    if (filtered) {
      const answer = await confirm();
      if (answer) {
        next(action);
      }
    } else {
      next(action);
    }
  };
};

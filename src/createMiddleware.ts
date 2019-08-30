import { Action, Middleware } from 'redux';

interface Options {
  confirm?: () => boolean | (() => Promise<boolean>);
}

const defaultOptions: Options = {
  confirm: () => window.confirm('Are you sure?'),
};

export default (rawOptions?: Options): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { confirm } = options;

  return () => next => async (action: Action) => {
    // @ts-ignore
    const answer = await confirm();

    if (answer) {
      next(action);
    }
  };
};

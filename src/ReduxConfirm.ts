const ReduxConfirm = store => next => action => {
  console.log(store.getState());
  next(action);
};

export default ReduxConfirm;

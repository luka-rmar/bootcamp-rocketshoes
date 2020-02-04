import { createStore, applyMiddleware, compose } from 'redux';
import createSagamiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagamiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;

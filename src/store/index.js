import { createStore } from 'redux';
import createSagamiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagamiddleware();

const store = createStore(rootReducer);
sagaMiddleware.run(rootSaga);

export default store;

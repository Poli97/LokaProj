import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;

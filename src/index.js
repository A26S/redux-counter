import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import './index.css';
import App from './App';
import { rootReducer } from './store/reducers/rootReducer';

// MIDDLEWARE

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const parseInteger = store => next => action => {
    if (action.val) {
        action.val = parseInt(action.val)
    }
    next(action)
}

const actionLogger = store => next => action => {
    console.clear()
    console.groupCollapsed('%cYou dispatched this action: %o', 'color: blanchedalmond;', action)
    console.log('%c...making the counter\'s state go from', 'color: blanchedalmond;', store.getState().counter.count)
    next(action)
    console.log('%c...to', 'color: blanchedalmond;', store.getState().counter.count)
}

// STORE
const store = createStore(rootReducer, 
    composeEnhancers(applyMiddleware(parseInteger, actionLogger))
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import './index.css';
import App from './App';
import { rootReducer } from './store/reducers/rootReducer';

// MIDDLEWARE

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const actionLogger = store => {
    return next => {
        return action => {
            console.clear()
            console.groupCollapsed('You dispatched this action: %o', action)
            console.log('...making the counter\'s state go from', store.getState().counter.count)
            next(action)
            console.log('...to', store.getState().counter.count)
        }
    }
}


// STORE
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(actionLogger)))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));

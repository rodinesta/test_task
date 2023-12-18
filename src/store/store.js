import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';
import switchReducer from './reducers/switchReducer'
import removedCardsReducer from './reducers/removedCardsReducer';


const rootReducer = combineReducers({
	data: dataReducer,
	switch: switchReducer,
	removedCards: removedCardsReducer
})

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('reduxState');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

const persistedState = loadState();

const store = configureStore({
	reducer: rootReducer,
	preloadedState: persistedState,
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.addEventListener('beforeunload', () => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });

export default store
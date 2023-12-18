import { combineReducers } from 'redux';
import dataReducer from './reducers/dataReducer';
import switchReducer from './reducers/switchReducer'
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	data: dataReducer,
	switch: switchReducer
})

const store = configureStore({
	reducer: rootReducer,
	}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
import { combineReducers } from 'redux';
import dataReducer from './reducers/dataReduces';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	data: dataReducer
})

const store = configureStore({
	reducer: rootReducer
})

export default store
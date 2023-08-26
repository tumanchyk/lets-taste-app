import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import themeReducer from './theme/theme.slice';

const reducers = combineReducers({
	// theme: themeReducer,

});

export const store = configureStore({
	reducer: reducers,
});
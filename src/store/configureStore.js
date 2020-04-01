import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Companies } from "./reducers/companies";

const persistConfig = {
	key: 'companies',
	storage
};

const persistedReducer = persistReducer(persistConfig, Companies);

export const configureStore = () => {
	const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
	const persistor = persistStore(store);
	return { store, persistor };
};

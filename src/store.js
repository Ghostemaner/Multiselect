import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import categoriesReducer from "./reducers/categoriesReducer";
import itemsCategoriesReducer from "./reducers/itemsCategoriesReducer";
import userActionsReducer from "./reducers/userActionsReducer";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    categories: categoriesReducer,
    itemsCategories: itemsCategoriesReducer,
    userActions: userActionsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore (
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)



import {createStore,combineReducers} from "redux";

/* Reucers */
import mealsReducer from "./reducers/index";


const rootReducer=combineReducers({
	meals:mealsReducer
});


const store=createStore(rootReducer);

export default store;
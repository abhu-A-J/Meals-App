import {MEALS} from "../../data/dummyData";

import {TOGGLE_FAVORITE} from "../actions"

const INITIAL_STATE={
	meals:MEALS,
	filteredMeals:MEALS,
	favoriteMeals:[]

}

const mealsReducer=(state=INITIAL_STATE,action)=>{
	switch (action.type){
		case TOGGLE_FAVORITE:{
			const existingIndex=state.favoriteMeals.findIndex(meal=>meal.id===action.payload);
			if(existingIndex>=0){
				const updatedFavMeals=[...state.favoriteMeals];
				updatedFavMeals.splice(existingIndex,1)
				return {
					...state,
					favoriteMeals:updatedFavMeals
				}
			}else{
				const newMeal=state.meals.find(meal=>meal.id===action.payload)
				return {
					...state,
					favoriteMeals:state.favoriteMeals.concat(newMeal)
				}
			}
			
		}
		default :{
			return state
		}
	}
}


export default mealsReducer
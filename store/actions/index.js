export const TOGGLE_FAVORITE='TOGGLE_FAVORITE';
export const SET_FILTERS='SET_FILTERS';



export const toggleFavorite=(mealID)=>{
	return {
		type:TOGGLE_FAVORITE,
		payload:mealID
	}
}


export const setFilters=(filterSettings)=>{
	return{
		type:SET_FILTERS,
		payload:filterSettings
	}
} 
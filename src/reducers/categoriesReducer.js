import { GET_CATEGOERIES, ADD_NEW_CATEGORY, REMOVE_CATEGORY } from "../actions/categories";

const initialState = {
    categories: []
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGOERIES:
            if(state.categories.length === 0) {
                return {
                    ...state,
                    categories: action.payload.categories
                }
            } else {
                return {
                    ...state
                }
            }
        case ADD_NEW_CATEGORY:
            return { 
                ...state, 
                categories: state.categories.concat(action.payload)
            }
        case REMOVE_CATEGORY:
            console.log(action.payload)
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload.categoryId)
            }
            default:
                return state
    }
}
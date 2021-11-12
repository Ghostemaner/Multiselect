import { GET_ITEMS_CATEGORIES } from "../actions/itemsCategories";
import { GET_ITEM_ID } from "../actions/itemsCategories";
import { TO_DELETE_ITEMS } from "../actions/itemsCategories"

const initialState = {
    itemsCategories: [],
    itemName: '',
    itemsDelete: []
}

export default function itemsCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS_CATEGORIES:
            return {
                ...state,
                itemsCategories: action.payload.items
            }
        case GET_ITEM_ID:
            return {
                ...state,
                itemId: action.payload.itemId
            }
        case TO_DELETE_ITEMS:
            return {
                itemsCategories: state.itemsCategories.filter(el => {
                    return action.payload.itemsDelete.indexOf(el.id) === -1;
                })
            }
            default:
                return state
    }
}
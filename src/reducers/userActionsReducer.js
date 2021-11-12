import { USER_ACTIONS } from "../actions/userActions";
import { SET_INPUT_VALUE } from "../actions/userActions"
import { SET_SHOW_SELECT } from "../actions/userActions"

const initialState = {
    userActions: [],
    inputValue: '',
    showSelect: false,
}

export default function userActionsReducer(state = initialState, action) {
    switch (action.type) {
        case USER_ACTIONS:
            return {
                ...state,
                userActions: action.payload.userActions,
            }
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload.inputValue
            }
        case SET_SHOW_SELECT:
            return {
                ...state,
                showSelect: action.payload.showSelect
            }
        default:
                return state
    }
}
export const USER_ACTIONS = 'INITIAL:USER_ACTIONS'
export const SET_INPUT_VALUE = 'INITIAL:SET_INPUT_VALUE'
export const SET_SHOW_SELECT = 'INITIAL:SET_SHOW_SELECT'

export const changeUserActions = (userActions, inputValue) => ({
    type: USER_ACTIONS,
    payload: {
        userActions,
    } 
})

export const getInputValue = (inputValue) => ({
    type: SET_INPUT_VALUE,
    payload: {
        inputValue,
    }
})

export const changeShowSelect = (showSelect) => ({
    type: SET_SHOW_SELECT,
    payload: {
        showSelect,
    }
})


export const changeInputValue = (inputValue) => {
    return (dispatch) => {
        dispatch(getInputValue(inputValue))
    }
}


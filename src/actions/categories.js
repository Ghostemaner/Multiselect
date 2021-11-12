import categories from '../mocks/categories.json'
export const GET_CATEGOERIES = 'INITIAL:GET_CATEGORIES'
export const ADD_NEW_CATEGORY = 'INITIAL:ADD_NEW_CATEGORY'
export const REMOVE_CATEGORY = 'INITIAL:REMOVE_CATEGORY'


export const getCategoriesData = (categories) => ({
    type: GET_CATEGOERIES,
    payload: {
        categories,
    } 
})

export const addNewCategory = (id, newCategory, flags) => ({
    type: ADD_NEW_CATEGORY,
    payload: {
        id: id,
        name : newCategory,
        flags : flags,
    }
})

export const removeCategory = (categoryId) => ({
    type: REMOVE_CATEGORY,
    payload: {
        categoryId
    }
})

export const getCategories = () => {
    return (dispatch) => {
        fetch(categories)
        .then((response) => {
            if(!response.ok || response.status !== 200) {
                throw Error(`it ain't work`)
            }
            return JSON.parse(JSON.stringify(categories))
        }).then((responseJSON)=>{
            
            dispatch(getCategoriesData(responseJSON))
        })
    }
}

export const addNewCategoryThunk = (newCategory) => {
    
    return (dispatch) => {

        const newId = Math.floor(Date.now());
        const flags = '';
        dispatch(addNewCategory(newId, newCategory, flags))
        
    }
    
}



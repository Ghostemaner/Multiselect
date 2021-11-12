import itemsCategories from '../mocks/itemsCategories.json'
export const GET_ITEMS_CATEGORIES = 'INITIAL:GET_ITEMS_CATEGORIES'
export const GET_ITEM_ID = 'INITIAL:GET_ITEM_ID'
export const TO_DELETE_ITEMS = 'INITIAL:TO_DELETE_ITEMS'


export const getItemsCategoriesData = (items) => ({
    type: GET_ITEMS_CATEGORIES,
    payload: {
        items,
    } 
})

export const getItemId = (itemId) => ({
    type: GET_ITEM_ID,
    payload: {
        itemId,
    }
})

export const toDeleteItems = (itemsDelete) => ({
    type: TO_DELETE_ITEMS,
    payload: {
        itemsDelete,
    }
})

// export const toDeleteItemsThunk = (itemsDelete) => {
//     return (dispatch) => {
//         dispatch(toDeleteItems(itemsDelete))
//     }
// }



export const getItemsCategories = () => {
    return (dispatch) => {
        
        fetch(itemsCategories)
        .then((response) => {
            if(!response.ok || response.status !== 200) {
                throw Error(`it ain't work`)
            }
            
            return JSON.parse(JSON.stringify(itemsCategories))
            
        }).then((responseJSON)=>{
            
            dispatch(getItemsCategoriesData(responseJSON))
        })
    }
}



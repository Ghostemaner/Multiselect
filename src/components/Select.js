import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, removeCategory } from "../actions/categories";
import { getItemId, toDeleteItems, getItemsCategories} from "../actions/itemsCategories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


export default function Select(props) {

  const { showSelect, inputValue, itemId } = props;

  const dispatch = useDispatch()

  const categories = useSelector((state) => state.categories.categories)
  const items  = useSelector((state) => state.itemsCategories.itemsCategories)
  
  const [itemsToDelete, setitemsToDelete] = React.useState([])
  let regexp = new RegExp('^'+inputValue, 'i');

  
  React.useEffect(() =>{
    if(categories.length === 0) {
      dispatch(getCategories())
    }
    if(items.length === 0) {
      dispatch(getItemsCategories())
    }
  }, [])

  const handleShowItem = (itemName) => {
    dispatch(getItemId(itemName))
  }

  const handleAddDeleteItems = (itemId) => {
    setitemsToDelete(prevItems => {
      return [
        ...prevItems,
        itemId
      ]
    })
  }

  const handleDeleteAllItems = (itemsToDelete) => {
    console.log(itemsToDelete)
    dispatch(toDeleteItems(itemsToDelete))
    setitemsToDelete([])
  }

  const handleRemoveCategory = (categoryId) => {
    dispatch(removeCategory(categoryId))
  }
  
  const handleGetItems = (itemId) => {
    let itemcontent = [];
      items.map((item) => {
        if(item.parent_id === itemId) {
          itemcontent.push(
            <div key={item.id} className={'item-content'}>
              <div>{item.name}</div>
              <input onChange={()=> handleAddDeleteItems(item.id)} type="checkbox"/>
            </div>)
        } 
      })
      
      return itemcontent
  }

  return (
      <>
        <div>
        {showSelect ?  (
        <div className={'dropdown'}>
            {categories.filter(el => regexp.test(el.name)).map((item) => (
              <div key={item.id}>
                  <div onClick={()=>handleShowItem(item.id)} className={'dropdown-category'}>
                    <span>{item.name}</span>
                      <button  onClick={()=> handleRemoveCategory(item.id)}>
                        <FontAwesomeIcon fixedWidth  icon={faTrashAlt} />
                      </button>
                  </div>
                  {item.id == itemId ? 
                  handleGetItems(item.id) 
                  : null}
              </div>
              ))}
              {itemsToDelete.length !== 0 ? 
              <button className={'button-del-all'} onClick={()=>handleDeleteAllItems(itemsToDelete)}>Delete items</button> 
              : null}
          </div>
          ) : null}
          
        </div>
        
      </>
    )
}



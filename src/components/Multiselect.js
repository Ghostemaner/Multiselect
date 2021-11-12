import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCategoryThunk, } from "../actions/categories";
import { getItemsCategories } from "../actions/itemsCategories";
import { changeInputValue } from "../actions/userActions"
import { changeShowSelect } from "../actions/userActions"

export default function Multiselect(props){

    const dispatch = useDispatch()

    const { inputValue, showSelect } = props
    const items  = useSelector((state) => state.itemsCategories.itemsCategories)
  
    React.useEffect(() =>{
      if(items.length === 0) {
        dispatch(getItemsCategories())
      }
    }, [])
    
    //Сброс состояния input из LocalStorage
    React.useEffect(()=>{
      if(!showSelect) {
        dispatch(changeShowSelect(false))
      } dispatch(changeShowSelect(true))
      
    }, [dispatch, changeShowSelect])
    
    const handleAddCategory = (newCategory) => {
      if(newCategory !== '') {
        dispatch(addNewCategoryThunk(newCategory))
        dispatch(changeInputValue(''))
      }
    }

    const handleShowDropdown = (e) => {
      dispatch(changeShowSelect(true))
    }

    const handleSetInputValue = (e) => {
      dispatch(changeInputValue(e.target.value.replace(/[^0-9a-zA-ZёЁа-яА-Я\s-]/g,'')))
    }

    return (
      <div className={'multiselect'}>
        <input className={'input'} placeholder={"Поиск категории"}  onFocus={handleShowDropdown} value={inputValue} onChange={handleSetInputValue}/>
        <button className={'input-button'} onClick={()=>handleAddCategory(inputValue)}>Add category</button>
      </div>
  )
}







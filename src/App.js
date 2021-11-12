import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Multiselect from './components/Multiselect';
import Select from './components/Select';
import withHoc from './components/withHocMultiselect';
import { changeShowSelect } from "./actions/userActions"

const MultiselectHoc = withHoc(Multiselect);

function App() {
  const dispatch = useDispatch()
  const itemId = useSelector((state) => state.itemsCategories.itemId)
  const inputValue = useSelector((state) => state.userActions.inputValue)
  let showSelect = useSelector((state) => state.userActions.showSelect)
  
 return (
  <div  className={"app"}>
    <div onClick={()=>dispatch(changeShowSelect(false))} className={'overlay'}></div>
    <div className={'app-multiselect'}>
        <MultiselectHoc  inputValue={inputValue} itemId={itemId} showSelect={showSelect}/>
        <Select inputValue={inputValue} itemId={itemId} showSelect={showSelect}/>
    </div>
  </div>
);
}

export default App;

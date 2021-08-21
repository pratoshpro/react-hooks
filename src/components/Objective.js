import React, { useState, useEffect, useCallback } from "react";
import { getObjectiveData } from '../helper/appService';
import { Loader } from "./Loader/Loader";
import Dropdown from "./Dropdown/Dropdown";
import Modal from "./Modal/Modal";
import List from "./List/List";
const Objective = (props) => {
  const [loading, setLoading] = useState(true); //set initial state for loader 
  const [renderItems, setRenderItems] = useState([]); //set initial state for render list which is going to use in list component 
  const [categories, setCategories] = useState([]); //set initial state for categories which is going to use in dropdown component 
  const [filteredByCategory, setFilteredByCategory] = useState({}); // set intial state for data which is filtered by Category.
  const apiUrl = 'https://okrcentral.github.io/sample-okrs/db.json'; //source url to fetch data
  const [items, setItemList] = useState([]); // state of all items
  const [modalInfo, setModalInfo] = useState(null); // state of modal

  /* toggle modal for show/hide */
  const toggleModal=useCallback(data=>{ 
    if(data){
      data.closeModal = toggleModal;
    }
    setModalInfo(data);
  },[])
 
/* useeffect hook to use fetching data and update state as per requirement*/
  useEffect(() => {
    fetch(apiUrl).then(response => {
      return response.json();
    }).then(responseData => {

      const { items, categories, filteredCategories } = getObjectiveData(responseData.data);  /** convert response data into list(items),categories,filteredByCategory */
      setItemList(items);
      setRenderItems(items);
      setCategories(categories);
      setFilteredByCategory(filteredCategories);
      setLoading(false);
 });

  }, [loading]);  // loading pass as dependecy in useeffect hook

  /**
   oncategory change event use for fetching value from dropdown component and update render item as per value
   */
  const onCategoryChange = event => {
    const { value } = event.target;
    const data = value ? filteredByCategory[value] : items;
    setRenderItems(data);

  };

  /** conditional statement default loader will be show  until data is not loaded from server*/

  return (
    <>
      {loading ? <Loader /> : (
        <>
          {categories && <Dropdown onChange={onCategoryChange} categories={categories} key="filter-dropdown" />}
          {renderItems.length > 1 && <List items={renderItems} toggleModal={toggleModal}/>}
          {modalInfo && <Modal data={modalInfo} />}
        </>
      )}
    </>);

};

export default Objective;

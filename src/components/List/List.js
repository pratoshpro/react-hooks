import React, { useState, useEffect,useCallback } from "react";
import Accordion from "../Accordion/Accordion";
function List(props) {
    
    const {toggleModal,items} = props;
    
    const [renderItems, setRenderItems] = useState([]);
    
    const getItems =useCallback(items => {
        
        const returnMenuItem = (item, i) => {
    
          let menuItem;
    
          if (item.children?.length) {
            let menuItemChildren = item.children.map((item, i) => {
              let menuItem = returnMenuItem(item, i);
              return menuItem;
            });
            menuItem = (
              <Accordion key={i} objective={item} openModal={toggleModal}>
                {menuItemChildren}
              </Accordion>
            );
    
          } else {
            menuItem = <Accordion key={i} objective={item} openModal={toggleModal}/>;
          }
          return menuItem;
        };
        
        return items.map((item, i) => {
          let menuItem = returnMenuItem(item, i);
          return menuItem;
        });
      },[toggleModal]);

    useEffect(() => {
    
    const renderList = getItems(items);
      setRenderItems(renderList);
    },[items,getItems]);

    return (renderItems.length> 1 ? renderItems: null );
}

export default List;

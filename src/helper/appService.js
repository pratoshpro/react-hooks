/* app common utility will go here */
export function getObjectiveData(inputData) {
    let resultObj = {};
    let filteredCategory = {};
    let itemList = [];
    let filterCategoryList = [];
    for (let cat of inputData) {
      const { id, parent_objective_id: parentId } = { ...cat };
  
      if (resultObj.hasOwnProperty(id)) {
        resultObj[id].children.push(cat);
      }
      else {
        resultObj[id] = { ...cat, children: [] };
        if (parentId && resultObj.hasOwnProperty(parentId)) {
          resultObj[parentId].children.push(cat);
        }
      }
    }
    for (let key in resultObj) {
      if (resultObj[key].children.length) {
        itemList.push(resultObj[key]);
      }
    }
    for (let item of itemList) {
      const category = item.category;
      if (filteredCategory.hasOwnProperty(category)) {
        filteredCategory[category].push(item);
      }
      else {
        filteredCategory[category] = [item];
        filterCategoryList.push(category);
      }
  
    }
    return {
      items:itemList,
      categories:filterCategoryList,
      filteredCategories:filteredCategory
    }
  }
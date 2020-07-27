import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, ADD_MATERIAL, DELETE_MATERIAL, EDIT_MATERIAL } from './actions';

function reducer(state, action) {
  switch (action.type) {

    case ADD_ITEM:
      console.log(action.payload);
      let { name: addItemName, value: addItemValue } = action.payload;
      let addItems = [...state.items];
      addItems.push({id: addItems[addItems.length - 1].id + 1, name: addItemName, value: addItemValue});
      console.log(addItems);

      return {
        ...state,
        items: [...addItems]
      };

    case DELETE_ITEM:
      let delItems = state.items.filter(i => i.id !== action.payload);

      return {
        ...state,
        items: [...delItems]
      };

    case EDIT_ITEM:
      let { id: editItemId, name: editItemName, value: editItemValue } = action.payload;
      let editItems = state.items.map(i => i.id === editItemId ? {...i, name: editItemName, value: editItemValue} : i);

      return {
        ...state,
        items: [...editItems]
      }
  
    case ADD_MATERIAL:
      let { name: addMaterialName, value: addMaterialValue } = action.payload;
      let addMaterials = [...state.materials];
      addMaterials.push({id: addMaterials[addMaterials.length - 1].id + 1, name: addMaterialName, value: addMaterialValue});
  
      return {
        ...state,
        materials: [...addMaterials]
      };
  
    case DELETE_MATERIAL:
      let delMaterials = state.materials.filter(i => i.id !== action.payload);
  
      return {
        ...state,
        materials: [...delMaterials]
      };
  
    case EDIT_MATERIAL:
      let { id: editMaterialId, name: editMaterialName, value: editMaterialValue } = action.payload;
      let editMaterials = state.materials.map(i => i.id === editMaterialId ? {...i, name: editMaterialName, value: editMaterialValue} : i);
  
      return {
        ...state,
        materials: [...editMaterials]
      }

    default:
      return state;
  }
}

export default reducer;

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_MATERIAL = 'ADD_MATERIAL';
export const DELETE_MATERIAL = 'DELETE_MATERIAL';
export const EDIT_MATERIAL = 'EDIT_MATERIAL';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}

export function editItem(item) {
  return {
    type: EDIT_ITEM,
    payload: item
  };
}

export function addMaterial(material) {
  return {
    type: ADD_MATERIAL,
    payload: material
  };
}

export function deleteMaterial(id) {
  return {
    type: DELETE_MATERIAL,
    payload: id
  };
}

export function editMaterial(material) {
  return {
    type: EDIT_MATERIAL,
    payload: material
  };
}

import React, { Fragment, useState, useEffect } from 'react';
import Modal from './Modal';
import Row from './Row';

function Table(props) {
  
  let [delItem, setDelItem] = useState({id: null, name: '', modal: false});
  let acceptDel = (id) => {
    return () => {
      setDelItem({id: null, name: '', modal: false});
      props.onDelete(id)();
    }
  };
  let deleteItem = (id, name) => {
    return () => {
      setDelItem({id, name, modal: true});
    }
  };
  let closeModal = () => setDelItem({...delItem, modal: false});

  let [activeItem, setActiveItem] = useState({id: null, name: '', value: ''});
  let addItem = (id) => {
    return () => {
      setActiveItem({id, name: '', value: ''});
    }
  };
  let cancelItem = () => {
    setActiveItem({id: null, name: '', value: ''});
  };
  let editItem = (id, name, value) => {
    return () => {
      setActiveItem({id, name, value});
    }
  };
  let saveItem = (id, name, value) => {
    return () => {
      setActiveItem({id: null, name: '', value: ''});
      props.onSave(id, name, value)();
    }
  }
  let inputChange = (input) => {
    return (e) => {
      switch(input) {
        case 'name':
          let name = e.target.value;
          setActiveItem({...activeItem, name});
          break;
        case 'value':
          let value = e.target.value.trim();
          if (isFinite(value)) {
            setActiveItem({...activeItem, value});
          }
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    setActiveItem({id: null, name: '', value: ''});
  }, [props.type]);

  return (
    <Fragment>
      <div>
        <div className='text-right'>
          <button type='button' className='btn btn-primary' disabled={activeItem.id} onClick={addItem('-')}>Добавить</button>
        </div>
        {activeItem.id === '-' && (
          <div className='mt-3 mt-sm-5'>
            <Row
              new
              editable
              id={activeItem.id}
              name={activeItem.name}
              value={activeItem.value}
              type={props.type}
              onNameChange={inputChange('name')}
              onValueChange={inputChange('value')}
              onSaveClick={saveItem}
              onCancelClick={cancelItem}
            />
          </div>
        )}
        <div className='mt-3 mt-sm-5 border-top'>
          {props.data.map(item => (
            <Row
              key={item.id}
              id={item.id}
              name={activeItem.id === item.id ? activeItem.name : item.name}
              value={activeItem.id === item.id ? activeItem.value : item.value}
              type={props.type}
              editable={activeItem.id === item.id}
              disabled={activeItem.id && activeItem.id !== item.id}
              onNameChange={inputChange('name')}
              onValueChange={inputChange('value')}
              onEditClick={editItem}
              onDelClick={deleteItem}
              onSaveClick={saveItem}
              onCancelClick={cancelItem}
            />
          ))}
          {!props.data.length && <p className='mt-5 mb-0 text-center'>Нет данных</p>}
        </div>
      </div>
      {delItem.modal && (
        <Modal
          title={'Удаление ' + (props.type === 'items' ? 'предмета' : 'материала')}
          text={'Вы действительно хотите удалить ' + (props.type === 'items' ? 'предмет ' : 'материал ') + delItem.name + '?'}
          button='Удалить'
          addButton='Отмена'
          onBtnClick={acceptDel(delItem.id)}
          onRequestClose={closeModal}
        />
      )}
    </Fragment>
  );
}

export default Table;

import React, { Fragment } from 'react';

function Row(props) {
  return (
    <div className={'row py-3 py-sm-5 py-md-3' + (props.new ? '' : ' border-bottom')}>
      <div className='col-md-2 col-xl-1'>
        <p className='mb-2'>id</p>
        <input className='form-control p-2' type='text' name='id' value={props.id} readOnly={true} />
      </div>
      <div className='col-md mt-3 mt-md-0'>
        <p className='mb-2'>Наименование</p>
        <input className='form-control p-2' type='text' name='name' value={props.name} autoComplete='off' readOnly={!props.editable} onChange={props.onNameChange} />
        {props.rels && (
          <p className='mt-3 mb-2'>Привязки</p>
        )}
      </div>
      <div className='col-md-3 mt-3 mt-md-0 mb-3 mb-sm-0'>
        {props.type === 'items' ? (
          <p className='mb-2'>Площадь, м<sup>2</sup></p>
        ) : (
          <p className='mb-2'>Стоимость м<sup>2</sup>, ед.</p>
        )}
        <input className='form-control p-2' type='text' name='value' value={props.value} autoComplete='off' readOnly={!props.editable} onChange={props.onValueChange} />
      </div>
      <div className='col-md-3 col-lg-2 mt-3 mt-sm-5 mt-md-0 mb-3 mb-sm-0'>
        <div className='row'>
          {props.editable ? (
            <Fragment>
              <div className='col-6 col-md'>
                <button type='button' className='btn btn-sm btn-primary w-100' disabled={props.name === '' || props.value === ''} onClick={props.onSaveClick(props.id, props.name, props.value)}>Сохранить</button>
              </div>
              <div className='col-6 col-md mt-md-2'>
                <button type='button' className='btn btn-sm btn-secondary w-100' disabled={props.editableParameterID} onClick={props.onCancelClick}>Отмена</button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className='col-6 col-md'>
                <button type='button' className='btn btn-sm btn-primary w-100' disabled={props.disabled} onClick={props.onEditClick(props.id, props.name, props.value)}>Редактировать</button>
              </div>
              <div className='col-6 col-md mt-md-2'>
                <button type='button' className='btn btn-sm btn-secondary w-100' disabled={props.disabled} onClick={props.onDelClick(props.id, props.name)}>Удалить</button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Row;

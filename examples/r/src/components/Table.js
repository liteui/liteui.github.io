import React, { Component, Fragment } from 'react';
import Modal from '../components/Modal';

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

class Table extends Component {
  state = {
    del_ID: null,
    del_name: '',
    edit_ID: null,
    edit_name: '',
    edit_value: '',
    modal: null
  }

  handleAcceptDelClick = (id) => {
    return () => {
      this.setState({
        del_ID: null,
        del_name: '',
        modal: null
      });

      this.props.onDelClick(id)();
    }
  }

  handleAddClick = (id) => {
    return () => {
      this.setState({
        edit_ID: id,
        edit_name: '',
        edit_value: ''
      });
    }
  }

  handleCancelClick = () => {
    this.setState({
      edit_ID: null,
      edit_name: '',
      edit_value: ''
    });
  }

  handleDelClick = (id, name) => {
    return () => {
      this.setState({
        del_ID: id,
        del_name: name,
        modal: 'del'
      });
    }
  }

  handleEditClick = (id, name, value) => {
    return () => {
      this.setState({
        edit_ID: id,
        edit_name: name,
        edit_value: value
      });
    }
  }

  handleModalRequestClose = () => {
    this.setState({
      modal: null
    });
  }

  handleNameChange = (e) => {
    const value = e.target.value;

    this.setState({
      edit_name: value
    });
  }

  handleSaveClick = (id, name, value) => {
    return () => {
      this.setState({
        edit_ID: null,
        edit_name: '',
        edit_value: ''
      });

      this.props.onSaveClick(id, name, value)();
    }
  }

  handleValueChange = (e) => {
    const value = e.target.value.trim();

    if (isFinite(value)) {
      this.setState({
        edit_value: value
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <div className='text-right'>
            <button type='button' className='btn btn-primary' disabled={this.state.edit_ID} onClick={this.handleAddClick(this.props.data.prefix + this.props.data.count)}>Добавить</button>
          </div>
          {this.state.edit_ID === (this.props.data.prefix + this.props.data.count) && (
            <div className='mt-3 mt-sm-5'>
              <Row
                new
                editable
                id={this.state.edit_ID}
                name={this.state.edit_name}
                value={this.state.edit_value}
                type={this.props.type}
                onNameChange={this.handleNameChange}
                onValueChange={this.handleValueChange}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
              />
            </div>
          )}
          <div className='mt-3 mt-sm-5 border-top'>
            {Object.values(this.props.data.list).map(item => (
              <Row
                key={item.id}
                id={item.id}
                name={this.state.edit_ID === item.id ? this.state.edit_name : item.name}
                value={this.state.edit_ID === item.id ? this.state.edit_value : item.value}
                type={this.props.type}
                editable={this.state.edit_ID === item.id}
                disabled={this.state.edit_ID && this.state.edit_ID !== item.id}
                onNameChange={this.handleNameChange}
                onValueChange={this.handleValueChange}
                onEditClick={this.handleEditClick}
                onDelClick={this.handleDelClick}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
              />
            ))}
            {!Object.values(this.props.data.list).length && <p className='mt-5 mb-0 text-center'>Нет данных</p>}
          </div>
        </div>
        {this.state.modal && (
          <Modal
            title={'Удаление ' + (this.props.type === 'items' ? 'предмета' : 'материала')}
            text={'Вы действительно хотите удалить ' + (this.props.type === 'items' ? 'предмет ' : 'материал ') + this.state.del_name + '?'}
            button='Удалить'
            addButton='Отмена'
            onBtnClick={this.handleAcceptDelClick(this.state.del_ID)}
            onRequestClose={this.handleModalRequestClose}
          />
        )}
      </Fragment>
    );
  }
}

export default Table;

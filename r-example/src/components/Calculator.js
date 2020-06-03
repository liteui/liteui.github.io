import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    items_value: Object.values(this.props.items.list).length ? Object.values(this.props.items.list)[0].value : null,
    materials_value: Object.values(this.props.materials.list).length ? Object.values(this.props.materials.list)[0].value : null,
    count: '',
    result: null
  }

  handleCalc = () => {
    this.setState(state => {
      return {
        result: state.items_value * state.materials_value * state.count
      };
    });
  }

  handleCountChange = (e) => {
    const value = e.target.value.trim().replace('.', '');

    if (isFinite(value)) {
      this.setState({
        count: value
      });
    }
  }

  handleSelectChange = (type) => {
    return (e) => {
      const id = e.target.value;

      this.setState({
        [type + '_value']: this.props[type].list[id].value
      });
    }
  }

  render() {
    return (
      <div className='py-3 py-md-0'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-5 col-xl-3'>
            <p className='mb-2 mb-md-0'>Предмет</p>
          </div>
          <div className='col-md-5 col-xl-3'>
            {Object.values(this.props.items.list) && Object.values(this.props.items.list).length > 0 ? (
              <select className='form-control' name='item' onChange={this.handleSelectChange('items')}>
                {Object.values(this.props.items.list).map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            ) : (
              <select className='form-control' name='item' disabled>
                <option>Нет данных</option>
              </select>
            )}
          </div>
        </div>
        <div className='row align-items-center justify-content-center mt-3 mt-md-5'>
          <div className='col-md-5 col-xl-3'>
            <p className='mb-2 mb-md-0'>Материал</p>
          </div>
          <div className='col-md-5 col-xl-3'>
            {Object.values(this.props.materials.list) && Object.values(this.props.materials.list).length > 0 ? (
              <select className='form-control' name='material' onChange={this.handleSelectChange('materials')}>
                {Object.values(this.props.materials.list).map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            ) : (
              <select className='form-control' name='material' disabled>
                <option>Нет данных</option>
              </select>
            )}
          </div>
        </div>
        <div className='row align-items-center justify-content-center mt-3 mt-md-5'>
          <div className='col-md-5 col-xl-3'>
            <p className='mb-2 mb-md-0'>Количество</p>
          </div>
          <div className='col-md-5 col-xl-3'>
            <input className='form-control px-3' type='text' name='count' placeholder='0' value={this.state.count} autoComplete='off' onChange={this.handleCountChange} />
          </div>
        </div>
        <div className='text-center mt-5'>
          <button type='button' className='btn btn-lg btn-primary' disabled={!this.state.items_value || !this.state.materials_value || !this.state.count} onClick={this.handleCalc}>Рассчитать</button>
        </div>
          {this.state.result && <p className='text-center h5 font-weight-normal mt-5 mb-0'>Стоимость составляет <span className='font-weight-bold'>{this.state.result}</span> единиц</p>}
      </div>
    );
  }
}

export default Calculator;

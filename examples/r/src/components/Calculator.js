import React, { useState } from 'react';

function Calculator(props) {

  let startingItem = props.items.length ? props.items[0].value : null;
  let startingMaterial = props.materials.length ? props.materials[0].value : null;

  let [item, setItem] = useState(startingItem);
  let changeItem = (e) => {
    let id = +e.target.value;
    let target = props.items.find(i => i.id === id);
    setItem(target.value);
  };

  let [material, setMaterial] = useState(startingMaterial);
  let changeMaterial = (e) => {
    let id = +e.target.value;
    let target = props.materials.find(i => i.id === id);
    setMaterial(target.value);
  };

  let [count, setCount] = useState('');
  let changeCount = (e) => {
    let value = e.target.value.trim().replace('.', '');

    if (isFinite(value)) {
      setCount(value);
    }
  };

  let [result, setResult] = useState(null);
  let calculate = () => {
    setResult(item * material * count);
  };


  return (
    <div className='py-3 py-md-0'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-md-5 col-xl-3'>
          <p className='mb-2 mb-md-0'>Предмет</p>
        </div>
        <div className='col-md-5 col-xl-3'>
          {props.items && props.items.length > 0 ? (
            <select className='form-control' name='item' onChange={changeItem}>
              {props.items.map(item => (
                <option key={'i-' + item.id} value={item.id}>{item.name}</option>
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
          {props.materials && props.materials.length > 0 ? (
            <select className='form-control' name='material' onChange={changeMaterial}>
              {props.materials.map(item => (
                <option key={'m-' + item.id} value={item.id}>{item.name}</option>
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
          <input className='form-control px-3' type='text' name='count' placeholder='0' value={count} autoComplete='off' onChange={changeCount} />
        </div>
      </div>
      <div className='text-center mt-5'>
        <button type='button' className='btn btn-lg btn-primary' disabled={!item || !material || !count} onClick={calculate}>Рассчитать</button>
      </div>
        {result && <p className='text-center h5 font-weight-normal mt-5 mb-0'>Стоимость составляет <span className='font-weight-bold'>{result}</span> единиц</p>}
    </div>
  );
}

export default Calculator;

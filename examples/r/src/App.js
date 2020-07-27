import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, editItem, addMaterial, deleteMaterial, editMaterial } from './redux/actions';
import Calculator from './components/Calculator';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App(props) {

  let tabs = [
    {id: 'items', name: 'Предметы'},
    {id: 'materials', name: 'Материалы'},
    {id: 'calculator', name: 'Расчет'}
  ];

  let handleDeleteItem = (id) => {
    return () => {
      props.deleteItem(id);
    };
  };

  let handleSaveItem = (id, name, value) => {
    return () => {
      if (id === '-') {
        props.addItem({name, value});
      } else {
        props.editItem({id, name, value});
      }
    };
  };
  
  let handleDeleteMaterial = (id) => {
    return () => {
      props.deleteMaterial(id);
    };
  };

  let handleSaveMaterial = (id, name, value) => {
    return () => {
      if (id === '-') {
        props.addMaterial({name, value});
      } else {
        props.editMaterial({id, name, value});
      }
    };
  };
  

  let [activeTab, setActiveTab] = useState({id: 'items', name: 'Предметы'});
  let changeTab = (tab) => {
    return () => {
      setActiveTab(tab);
    }
  }
  

  let tabsNav = tabs.map(tab => {
    let classes = ['rounded-0', 'btn', 'btn-primary', 'px-2', 'px-sm-3', 'py-3', 'btn-nav'];
    
    if (activeTab.id === tab.id) {
      classes.push('active');
    }

    return <button key={tab.id} type='button' className={classes.join(' ')} onClick={changeTab(tab)}>{tab.name}</button>
  });

  let tabContent = activeTab.id === 'items' ? (
    <Table type='items' data={props.items} onDelete={handleDeleteItem} onSave={handleSaveItem} />
  ) : activeTab.id === 'materials' ? (
    <Table type='materials' data={props.materials} onDelete={handleDeleteMaterial} onSave={handleSaveMaterial} />
  ) : (
    <Calculator items={props.items} materials={props.materials} />
  );
  
  return (
    <div className='pt-5'>
      <div className='bg-primary fixed-top'>
        <div className='container'>
          <div className='d-flex'>
            {tabsNav}
          </div>
        </div>
      </div>
      <div className='mt-3 mt-xl-5 py-3 py-sm-5'>
        <div className='container'>
          <h3 className='mb-3 mb-sm-5'>{activeTab.name}</h3>
          {tabContent}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
  materials: state.materials
});

const mapDispatchToProps = {
  addItem,
  deleteItem,
  editItem,
  addMaterial,
  deleteMaterial,
  editMaterial
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    items: {
      list: {
        'i-1': {id: 'i-1', name: 'I1', value: '10'},
        'i-2': {id: 'i-2', name: 'I2', value: '15'},
        'i-3': {id: 'i-3', name: 'I3', value: '20'}
      },
      prefix: 'i-',
      count: 4
    },
    materials: {
      list: {
        'm-1': {id: 'm-1', name: 'M1', value: '80'},
        'm-2': {id: 'm-2', name: 'M2', value: '90'},
        'm-3': {id: 'm-3', name: 'M3', value: '100'},
      },      
      prefix: 'm-',
      count: 4
    },
    tabId: 'items',
    tabName: 'Предметы'
  }

  tabs = [
    {id: 'items', name: 'Предметы'},
    {id: 'materials', name: 'Материалы'},
    {id: 'calculator', name: 'Расчет'}
  ]

  handleChangeTabClick = (tab) => {
    return () => {
      this.setState({
        tabId: tab.id,
        tabName: tab.name
      });
    }
  }

  handleDelClick = (id) => {
    return () => {
      this.setState(state => {
        const type = state.tabId;
        const items = Object.assign({}, state[type]);

        delete items.list[id];

        return {
          [type]: items
        };
      });
    }
  }

  handleSaveClick = (id, name, value) => {
    return () => {
      this.setState(state => {
        const type = state.tabId;
        const items = Object.assign({}, state[type]);

        if (!items.list[id]) {
          items.count++;
        }

        items.list[id] = {id, name, value};

        return {
          [type]: items
        };
      });
    }
  }

  render() {
    return (
      <div className='pt-5'>
        <div className='bg-primary fixed-top'>
          <div className='container'>
            <div className='d-flex'>
              {this.tabs.map(tab => (
                <button key={tab.id} type='button' className={'rounded-0 btn btn-primary px-2 px-sm-3 py-3 btn-nav' + (this.state.tabId === tab.id ? ' active' : '')} onClick={this.handleChangeTabClick(tab)}>{tab.name}</button>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-3 mt-xl-5 py-3 py-sm-5'>
          <div className='container'>
            <h3 className='mb-3 mb-sm-5'>{this.state.tabName}</h3>
            {this.state.tabId === 'calculator' ? (
              <Calculator items={this.state.items} materials={this.state.materials} />
            ) : (
              <Table key={this.state.tabId} type={this.state.tabId} data={this.state[this.state.tabId]} onSaveClick={this.handleSaveClick} onDelClick={this.handleDelClick} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

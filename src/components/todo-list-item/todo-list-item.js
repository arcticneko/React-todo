import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  render() { // props - произвольные входные данные. деструктуриуем в просто label. если ничего не передать в props то он будет существовать пустым
    const { label, important = 'false' } = this.props;
    
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    }
  
    return (
    <span className='todo-list-item' 
          style={style}>
      {label}
      <button type='button'
              className='btn btn-outline-success btn-sm float-right'>
        <i className="fa fa-exclamation"></i>
      </button>
  
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"></i>
      </button>
  
    </span>
    )
    // span а не <li> - независимый элемент
  }
}

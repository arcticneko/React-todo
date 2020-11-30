import React from 'react';

const TodoListItem = ({ label, important = 'false' }) => { // props - произвольные входные данные. деструктуриуем в просто label. если ничего не передать в props то он будет существовать пустым
  const style = {
    color: important ? 'tomato' : 'black'
  }

  return <span style={style}>{label}</span>
  // span а не <li> - независимый элемент
}

export default TodoListItem;

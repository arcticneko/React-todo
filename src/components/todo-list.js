import React from 'react';
import TodoListItem from './todo-list-item';

// получаем todos в index.js сверху и передаем в TodoList

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      // элементы массива это JSX эл-ты которые после вставляем в <ul>
      <li>
        <TodoListItem {...item} />
      </li>
    )
  })

  return (
    <ul>
      { elements}
    </ul>
    // { elements} = через фигурные скобки можно так же передавать массив элементов
  )
};

export default TodoList;

//important === important={true} если мы не передаем значение 
//компоненту, оно по умолчанию true

//<TodoListItem {...item} /> означает взять каждое свойство из объекта item 
//и передать его в качестве атрибута в todoListItem:
// label={item.label}
// important={item.important} />
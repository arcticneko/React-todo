import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

// получаем todos в index.js сверху и передаем в TodoList

const TodoList = ({ todos, onDeleted,
										onToggleImportant,
										onToggleDone }) => {
											
  const elements = todos.map((item) => {
    const { id, display, ...itemProps} = item; // обычная деструктуризация

    return (
      // элементы массива это JSX эл-ты которые после вставляем в <ul>
      <li key={id} className='list-group-item todo-list-item'>
        <TodoListItem {...itemProps} 
        onDeleted={ () => onDeleted(id)}
				onToggleImportant={ () => onToggleImportant(id)}
				onToggleDone={ () => onToggleDone(id) }/>
      </li>
    )
  })

  return (
    <ul className='list-group todo-list'>
      { elements }
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

//<li key={item.id}></li> уникальный идентификатор для React. по нему reconciliation algorithm (процесс поиска изменений) будет ловить изменения и ререндерить элементы
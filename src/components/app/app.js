import React, { Component } from 'react';
import ReactDom from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

// компонент App просто собирает сртуктуру, по этому оставляем его здесь
export default class App extends Component {

	maxId = 100; // никак не влияет на рендеринг, по этому не в state => можем менять

	state = {
		todoData: [
			this.createTodoItem("Drink Cofee"),
			this.createTodoItem("Make Awesome App"),
			this.createTodoItem("Have a lunch"),
		],
		term : '',
		termFilter: ''
	}

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			display: true,
			id: this.maxId++,
		}
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id)

			const newArray = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1),
			];

			return {
				todoData: newArray
			};
		});
	};

	addItem = (text) => {
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			const newArray = [
				...todoData,
				newItem,
			];

			return {
				todoData: newArray
			}
		})
	}

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id)
			
		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]}; // перезапись старого done
	
		return [
			...arr.slice(0, idx),
			newItem, // вставка обновленого эл-та
			...arr.slice(idx + 1),
		];
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		})
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		})
	}

	onSearch(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label
			.toLowerCase()
			.indexOf(term.toLowerCase()) > -1;
		})
	}

	onSearchChange = (term) => {
		this.setState({ term })
	}

	onStatusClickChange = (termFilter) => {
		this.setState({ termFilter })
	}

	render() {
		const { todoData, term } = this.state;

		const visibleItems = this.onSearch(todoData, term);

		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel 
					onSearchChange={this.onSearchChange}/>
					<ItemStatusFilter 
					onStatusClickChange={this.onStatusClickChange}/>
				</div>

				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem} 
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}	/>

				<ItemAddForm onItemAdded={this.addItem} />
			</div>
		)
	}
}


//<TodoList todos={todoData} /> передаем массив
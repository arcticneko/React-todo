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
		]
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

	onSearch = (evt) => {
		this.setState(( {todoData}) => {
			const filteredData = todoData.filter((el) => el.display)
		} )
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

	render() {
		const { todoData } = this.state;
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter 
					onChange={this.onSearch}/>
				</div>

				<TodoList
					todos={todoData}
					onDeleted={this.deleteItem} 
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}	/>

				<ItemAddForm onItemAdded={this.addItem} />
			</div>
		)
	}
}


//<TodoList todos={todoData} /> передаем массив
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './item-add-form.css'

export default class ItemAddForm extends Component {

	state = {
		label: ''
	}

	// т.к. state не зависит от предыдущего state, передача объекта напрямую
	onLabelChange = (evt) => {
		this.setState({
			label: evt.target.value
		})
	}

	onSubmit = (evt) => {
		evt.preventDefault();
		this.props.onItemAdded(this.state.label)
		this.setState ({
			label: ''
		});
	}

	render() {
		return (
			<form className="item-add-form bottom-panel"
						onSubmit={this.onSubmit}>
				<input type="text" className="form-control new-todo-label d-flex"
														onChange={this.onLabelChange}
														placeholder="What needs to be done"
														value={this.state.label} />
				<button className="btn btn-outline-secondary">
					Add Item
				</button>
			</form>
		)
	}
}       

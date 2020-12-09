import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './item-add-form.css'

export default class ItemAddForm extends Component {

	render() {
		return (
			<div className="item-add-form">
				<input></input>
				<button className="btn btn-outline-secondary"
					onClick={ () => this.props.onItemAdded('Hello world')}>
					Add Item
				</button>
			</div>
		)
	}
}       

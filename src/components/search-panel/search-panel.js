import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
	state = {
		term: ''
	}

	onSearchChange = (evt) => {
		const term = evt.target.value;

		this.setState({ term });
		this.props.onSearchChange(term); // без объявления пропса. приходит по умолчанию
	};

	render () {
		return <input className='search-panel' 
									placeholder='search' 
									type='text'
									value={this.state.term}
									onChange={this.onSearchChange}></input>
	}
}


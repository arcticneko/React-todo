import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	state = {
		filter: 'all'
	}

	onClickChange = (evt) => {
		const term = evt.target.value;

		this.setState({
			filter: term
		})

		this.props.onStatusClickChange(term)
	}

  render() {
    return (
			<div className='btn-group'>
        <button type='button'
								className='btn btn-info'
								value='all'
								onClick={this.onClickChange}>All</button>
        <button type='button' 
								className='btn btn-outline-secondary'
								value='active'
								onClick={this.onClickChange}>Active</button>
        <button type='button' 
								className='btn btn-outline-secondary'
								value='done'
								onClick={this.onClickChange}>Done</button>
      </div>
    )
  }
}

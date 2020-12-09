import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  // после инициализации state нельзя менять напрямую
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState({
      done: true,
    });
  }

  onMarkImportant = () => {
    this.setState({
      important: true,
    });
  }

  render() { // props - произвольные входные данные. деструктуриуем в просто label. если ничего не передать в props то он будет существовать пустым
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item'

    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className='todo-list-item-label'
          onClick={this.onLabelClick}>
          {label}
        </span>

        <button type='button'
          className='btn btn-outline-success btn-sm float-right'
          onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation"></i>
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
          <i className="fa fa-trash-o"></i>
        </button>

      </span>
    )
    // span а не <li> - независимый элемент
  }
}

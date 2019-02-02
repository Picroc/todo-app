import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';



export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Make a profit')
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData, newItem]
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldData = todoData[idx];
            const newItem = { ...oldData, important: !oldData.important };

            return {
                todoData: [...todoData.slice(0, idx),
                    newItem,
                ...todoData.slice(idx + 1)]
            }
        });

       // console.log('Imp ', id);
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldData = todoData[idx];
            const newItem = { ...oldData, done: !oldData.done };

            return {
                todoData: [...todoData.slice(0, idx),
                    newItem,
                ...todoData.slice(idx + 1)]
            }
        });
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    render() {

        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3} />

                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    };
}
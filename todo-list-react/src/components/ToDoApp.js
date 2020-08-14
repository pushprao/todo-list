import React from "react";
import {AddTodoItem} from "./AddTodoItem";
import TodoListItems from "./TodoListItems";
import "../TodoApp.css"

export default class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/pushprao/todo-list/master/todos.json")
            .then(res => {
                console.log("response: ", res)
                return res.json()
            })
            .then(json => {
                console.log("data:",json)
                this.setState({todoItems: json})
            })
            .catch(e => console.log("error:", e))
    }

    addTodo = (todoName) => {
        const newTodoItem = {
            id: this.state.todoItems.length + 1,
            name: todoName,
            done: false
        }
        const newTodoItems = [newTodoItem, ...this.state.todoItems]
        this.setState({
            todoItems: newTodoItems
        })
    }

    completeTodoItem = (todoItemId) => {
        const updatedItems = this.state.todoItems.map(item =>
            (item.id === todoItemId ? {...item, done: true} : item));
        this.setState({todoItems: updatedItems})
    }

    render() {
        return (
            <React.Fragment>
                <div className={"header"}>
                    <h2>TO DO list</h2>
                    <AddTodoItem addTodo={this.addTodo}/>
                </div>
                <React.Fragment>
                    <TodoListItems todos={this.state.todoItems} completeTodoItem={this.completeTodoItem}/>
                </React.Fragment>
            </React.Fragment>
        )
    }
}
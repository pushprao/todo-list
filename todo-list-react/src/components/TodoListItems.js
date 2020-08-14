import React from "react";

export default class TodoListItems extends React.Component {

    completeTodoItem = (id) => {
        this.props.completeTodoItem(id)
    }

    render() {
        return (
            <React.Fragment>
                <ul className={"todoList"}>
                    {this.props.todos.map((todo, index) => {
                        if (todo.done) {
                            return (
                                <li id={index} key={index} className={"checked"}
                                    onClick={() => this.completeTodoItem(todo.id)}>{todo.name}</li>)
                        } else {
                            return (
                                <li id={index} key={index}
                                    onClick={() => this.completeTodoItem(todo.id)}>{todo.name}</li>)
                        }
                    })}
                </ul>
            </React.Fragment>
        );
    }
}
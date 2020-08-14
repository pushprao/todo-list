import React from "react";

export class AddTodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({todoName: e.target.value});
    }

    addTodo = () => {
        this.props.addTodo(this.state.todoName);
        this.setState({todoName: ""})
    }

    render() {
        return (
            <React.Fragment>
                <input type={"text"} placeholder={"type"}
                       value={this.state.todoName}
                       onChange={(e) => this.handleOnChange(e)}/>
                <span onClick={this.addTodo} className={"addTodoBtn"}>Add</span>
            </React.Fragment>
        )
    }
}
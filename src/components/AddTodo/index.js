import React, {Component} from 'react';
import ListTodos from "../ListTodos";
import {connect} from "react-redux";
import {addTodo} from "../../actions/todos";


class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {title: ''}
        }
    }

    onClickSave = () => {
        console.log(`saving ${this.state.todo.title}`);
        this.props.dispatch(addTodo(this.state.todo));
    };

    onTitleChange = (e) => {
        const todo = this.state.todo;
        todo.title = e.target.value;
        this.setState({todo: todo});
    };

    todoRow = (todo, index) => {
        return <div key={index}>{todo.title}</div>;
    };

    render() {
        return (
            <div>
                <h1>Todos</h1>
                {this.props.todos.map(this.todoRow)}
                <h2>Add ToDo</h2>
                <input type='text'
                       onChange={this.onTitleChange}
                       value={this.state.todo.title}/>

                <input type="submit"
                       value="Add ToDo"
                       className="btn btn-primary"
                       onClick={this.onClickSave}/>

                <ListTodos todos={[]}/>
            </div>
        );
    }
}

let mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
};

/*
let mapDispatchToProps = () => {

};
*/

export default connect(mapStateToProps)(AddTodo);
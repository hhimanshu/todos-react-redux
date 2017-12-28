import React, {Component} from 'react';
import {connect} from "react-redux";
import * as todoActions from "../../../actions/todos";
import {bindActionCreators} from "redux";
import {AddForm} from "../presentation";


class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {title: ''}
        }
    }

    onClickSave = () => {
        console.log(`saving ${this.state.todo.title}`);
        this.props.actions.addTodo(this.state.todo);
    };

    onTitleChange = (e) => {
        const todo = this.state.todo;
        todo.title = e.target.value;
        this.setState({todo: todo});
    };

    render() {
        return <AddForm title={this.state.title}
                        onClickSave={this.onClickSave}
                        onTitleChange={this.onTitleChange}/>;
    }
}

let mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
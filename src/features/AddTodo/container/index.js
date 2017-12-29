import React, {Component} from 'react';
import {connect} from "react-redux";
import * as todoActions from "../../../actions/todos";
import * as titleActions from "../../../actions/appBar";
import {bindActionCreators} from "redux";
import {AddForm} from "../presentation";


class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {title: ''}
        }
    }

    componentWillMount() {
        this.props.changeTitle('New ToDo');
    }

    onClickSave = () => {
        console.log(`saving ${this.state.todo.title}`);
        this.props.addTodo(this.state.todo);
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
        addTodo: bindActionCreators(todoActions.addTodo, dispatch),
        changeTitle: bindActionCreators(titleActions.changeTitle, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
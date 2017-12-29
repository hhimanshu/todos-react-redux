import React from 'react';
import * as titleActions from "../../../actions/appBar";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ListTodosPage} from "../presentation";

class ListTodos extends React.Component {

    componentWillMount() {
        this.props.actions.changeTitle('List ToDos');
    }

    render() {
        return <ListTodosPage todos={this.props.todos} />
    }
}

let mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(titleActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
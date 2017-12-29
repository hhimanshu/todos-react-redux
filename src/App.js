import React from 'react'
import ApplicationBar from "./features/ApplicationBar";
import {Drawer, MenuItem} from "material-ui";
import {bindActionCreators} from "redux";
import * as titleActions from "./actions/appBar";
import {connect} from "react-redux";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    onTitleClick = () => {
        this.setState({open: !this.state.open});
    };

    onMenuItemClick = (newTitle) => {
        this.setState({open: !this.state.open});
        //this.props.actions.changeTitle(newTitle);
        this.props.history.push('/list');
    };

    onAddTodoClick = () => {
        this.props.history.push('/add');
    };

    render() {
        return <div>
            <ApplicationBar title={this.state.title}
                            onTitleClick={this.onTitleClick}/>
            <div>
                <Drawer open={this.state.open}>
                    <MenuItem onClick={() => this.onMenuItemClick("list")}>List</MenuItem>
                </Drawer>
            </div>
            <FloatingActionButton onClick={this.onAddTodoClick} style={{
                right: 20,
                position: 'fixed',
                bottom: 20
            }}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    }
}

let mapStateToProps = (state, ownProps) => {
    return {
        title: state.title
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(titleActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
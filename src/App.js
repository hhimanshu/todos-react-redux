import React from 'react'
import AddTodo from "./components/AddTodo";
import ApplicationBar from "./components/ApplicationBar";
import {Drawer, MenuItem} from "material-ui";
import {bindActionCreators} from "redux";
import * as titleActions from "./actions/appBar";
import {connect} from "react-redux";

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
        this.props.actions.changeTitle(newTitle);
    };

    render() {
        return <div>
            <ApplicationBar title={this.state.title}
                            onTitleClick={this.onTitleClick}/>
            <div>
                <Drawer open={this.state.open}>
                    <MenuItem onClick={() => this.onMenuItemClick("One")}>Change Tile to "One"</MenuItem>
                    <MenuItem onClick={() => this.onMenuItemClick("Two")}>Change Tile to "Two"</MenuItem>
                </Drawer>
            </div>
            <AddTodo/>
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
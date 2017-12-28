import React from 'react';
import {AppBar} from "material-ui";
import {bindActionCreators} from "redux";
import * as titleActions from '../../actions/appBar';
import {connect} from "react-redux";

class ApplicationBar extends React.Component {
    render() {
        return <AppBar title={this.props.title}
                       onLeftIconButtonClick={this.props.onTitleClick}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationBar)
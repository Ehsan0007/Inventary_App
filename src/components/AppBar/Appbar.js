import React, { Component } from 'react';
import * as mat from 'material-ui';
// import {browserHistory} from 'react-router';

class AppBar extends Component{
    render(){
        return(
            <div>
                <mat.AppBar
                title="Inventory Management System"
                showMenuIconButton={false}
                 >
                </mat.AppBar>
                {this.props.children}
            </div>
        )
    }
}

export default AppBar;
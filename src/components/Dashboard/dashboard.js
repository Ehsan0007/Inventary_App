import React, { Component } from 'react';
import * as mat from 'material-ui';
import './dashboard.css'
import {browserHistory} from 'react-router';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {open : false}
    }
     handleToggle = () =>this.setState({ open : !this.state.open}) 
     handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    createStore = () =>{
        // this.setState({open : !this.state.open})
        browserHistory.push('/createStore')
    }

    createProduct = () =>{
        // this.setState({open : !this.state.open})
        browserHistory.push('/createProduct')
    }

    addPurchase = () =>{
        // this.setState({open : !this.state.open})
        browserHistory.push('/AddPurchaseDetail')
    }

    addSale = () =>{
        // this.setState({open : !this.state.open})
        browserHistory.push('/Addsale')
    }

    gotoPurchase = () =>{
        // this.setState({open : !this.state.open})
        browserHistory.push('/Purchase')
    }

    gotoSale = () =>{
        // this.setState({open : !this.state.open})
        browserHistory.push('/saleDetail')
    }

    gotoStock = () =>{
        // this.setState({open : !this.state.open})
        browserHistory.push('/stock')
    }

    render(){
        return(
            <div>
                <mat.AppBar
                title="Inventory Management System" 
                onLeftIconButtonTouchTap={this._handleClick}
                onTouchTap={this.handleToggle}
                 />
                <mat.Drawer open={this.state.open}
                  
                  onRequestChange={(open)=>this.setState({open})}
                  docked={true}
                  openSecondary={false}
                  ><mat.AppBar title="DashBoard" showMenuIconButton={false} />
                <mat.MenuItem disabled className="disbaledImage"><img src="https://www.zoho.com/books/images/inventory/inventory-image.png" className="logoImage" role="presentation"/></mat.MenuItem>
                    <mat.MenuItem  onTouchTap={this.createStore}>Create Store</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.createProduct}>Create Product</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.addPurchase}>Add Purchase Detail</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.addSale}>Add Sale Detail</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoPurchase}>Purchase</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoSale}>View Sales</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoStock}>Stock</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.logout}>Logout</mat.MenuItem>
                </mat.Drawer>
                 {this.props.children}
            </div>
        )
    }
}

export default Dashboard;
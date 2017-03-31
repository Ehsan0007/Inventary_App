import React, { Component } from 'react';
import * as mat from 'material-ui';
// import {browserHistory} from 'react-router';

class CreateStore extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleStoreSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
        //This is called for Loading Initial State
        // this.props.loadInitialState();
    }

    // componentWillReceiveProps() {
    //     setTimeout(() => {
    //         if (this.props.application && this.props.application.user) {
                
               
    //         }
    //     },5)
    // }


    handleStoreSubmit(evt) {
        evt.preventDefault();
        var storeName = this.refs.store.getValue();
        var location = this.refs.location.getValue();
        var userObj = { 
            // uid : this.props.application.user.uid,
            // userEmail : this.props.application.user.email,
            storeName : storeName,
            location : location
         };
        this.props.addStoreRequest(userObj);
       
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { application } = this.props.application;
        console.log("sdfsdfssddfsdfddssdfsdfdsfd",application)
        return (
            <div className="main-login-div">
    
                <mat.Card className="centerAlign">
                    <mat.AppBar title="Create Store" showMenuIconButton={false}  />
                    <mat.CardText>
                        {/*<p>Don`t Have account? <Link to="/signup">SignUp</Link></p>*/}
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <mat.TextField
                                hintText="Store Name"
                                floatingLabelText="Store Name"
                                className="full-width-container"
                                ref="store"
                                name="store"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="Location"
                                floatingLabelText="Location"
                                className="full-width-container"
                                ref="location"
                                name="location"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                           
                            <mat.RaisedButton type="submit"  label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default CreateStore;
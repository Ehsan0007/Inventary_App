import React, { Component } from 'react';
import * as mat from 'material-ui';
// import {browserHistory} from 'react-router';

class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleProductSubmit.bind(this);
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

    handleProductSubmit(evt) {
        evt.preventDefault();
      var productName = this.refs.product.getValue();
        var maufacturer = this.refs.manufacturer.getValue();
        var description = this.refs.description.getValue();

           var Productobject = {
            productName : productName,
            maufacturer : maufacturer,
            description : description,
            quantity : 0,
            // salevolume : 1,
        }
        console.log(Productobject)
         this.props.addProductRequest(Productobject);
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
 
        // const { application } = this.props.application;
        return (
            <div className="main-login-div">
    
                <mat.Card className="centerAlign">
                    <mat.AppBar title="Add Product" showMenuIconButton={false}  />
                    <mat.CardText>
                        {/*<p>Don`t Have account? <Link to="/signup">SignUp</Link></p>*/}
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <mat.TextField
                                hintText="Product Name"
                                floatingLabelText="Product Name"
                                className="full-width-container"
                                ref="product"
                                name="products"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                                
                            <mat.TextField
                                hintText="Manufacturer"
                                floatingLabelText="Manufacturer"
                                className="full-width-container"
                                ref="manufacturer"
                                name="Manufacturer"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                   
                            <mat.TextField
                                hintText="Product Description"
                                floatingLabelText="Product Description"
                                className="full-width-container"
                                ref="description"
                                name="decription"
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

export default CreateProduct;
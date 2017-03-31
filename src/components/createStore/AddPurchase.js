import React, { Component } from 'react';
import * as mat from 'material-ui';
// import {browserHistory} from 'react-router';

class AddPurchaseDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { arr: [], PurchasesDate : new Date(),store: "Bar B.Q",product : "Tikka Boti"};
       
        this.handleSubmit = this.handleProductSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleStorename = (event,index,value) =>{this.setState({store : value});console.log(value)}
    handleProductname = (event,index,value) =>{this.setState({product : value , key : value})}


    componentDidMount(){  
           this.props.loadStoreState();
           this.props.loadProductData();
      }
 
    componentWillMount(){
       this.setState({arr : this.props.application.purchase})
    }

    handleProductSubmit(evt) {
        const month = ["Jan","Feb","Mar","April","May","Jun","July","Aug","Sep","Oct","Nov"];
        const getmonth = this.state.PurchasesDate.getMonth();
        const months = month[getmonth];
        const hours = this.state.PurchasesDate.getHours() > 12 ? this.state.PurchasesDate.getHours() -12 : this.state.PurchasesDate.getHours();
        const timeconvention = this.state.PurchasesDate.getHours() > 12 ? "PM" : "AM";

        // console.log(" " , this.state.product)
        const combine = this.state.product;
        const product = combine.split("||");
        const productname = product[0];
        const key = product[1]; 
        console.log("hme key se ye mila" , product)

        evt.preventDefault();
        var ObjectSave ={
            store : this.state.store,
            product : productname,
            productId : key,
            PurchasesDate : months + " /" + this.state.PurchasesDate.getDate()   + "/" + this.state.PurchasesDate.getFullYear() + " " + " "  + " " + hours +  ":" + this.state.PurchasesDate.getMinutes() + ":" + this.state.PurchasesDate.getSeconds()+ " "  +  timeconvention,
            Quantity : this.refs.quantity.getValue(),
            Unit : this.refs.unitprice.getValue(),
            total : this.refs.quantity.getValue() * this.refs.unitprice.getValue(),
        }
        this.props.addPurchase(ObjectSave);
        console.log(ObjectSave)
    }
        
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleDateChange = (event, date) => {
    this.setState({
      PurchasesDate: date,
    });
    console.log(date);
  };

    render() {
        // console.log("Ehsan Khan ",this.state.arr)
        const store =  this.props && this.props.application && this.props.application.purchase ? this.props.application.purchase : [] ;
        // console.log("Ehsn Khan",store)
        const product = this.props && this.props.application && this.props.application.product ? this.props.application.product : [] ;
      
        return (
            <div className="main-login-div">
               
                <mat.Card className="centerAlign">
                    <mat.AppBar title="Purchase Detail" showMenuIconButton={false}  />
                    <mat.CardText>
                      {product && product.length > 0 ?
                         <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                              <mat.SelectField
                                required
                                 floatingLabelText="Store"
                                 className="full-width-container"
                                 value={this.state.store}
                                  onChange={this.handleStorename}
                                 ref="store">
                                {
                                    store.map((v, i) => {
                                        return (
                                            <mat.MenuItem value={v.storeName} key={i} primaryText={v.storeName}></mat.MenuItem>
                                        )
                                    })}                            
                                    </mat.SelectField><br/>
                         
                              <mat.SelectField
                                required
                                 floatingLabelText="Product"
                                 className="full-width-container"
                                 value={this.state.product}
                                   onChange={this.handleProductname}
                                ref="product">
                                {
                                    product.map((v, i) => {
                                        {/*console.log("product " , v)*/}
                                        return (
                                            <mat.MenuItem value={v.productName + "||" + v.key} key={i} primaryText={v.productName}></mat.MenuItem>
                                        )
                                    })
                                }                            
                                </mat.SelectField><br/>

                                   <mat.DatePicker
                                    ref="PurchaseDate"
                                    hintText="Purchase Date"
                                    className="full-width-container"
                                    floatingLabelText="Purchase Date"
                               
                                    onChange={this.handleDateChange}
                                    >
                                    </mat.DatePicker>
                                    
                                      <mat.TextField
                                        hintText="Quantity"
                                        floatingLabelText="Quantity"
                                        className="full-width-container"
                                        ref="quantity"
                                        name="quantity"
                                        required={true}
                                        type="text"
                                      
                                        onChange={this.handleInputChange}>
                                    </mat.TextField><br/>

                                      <mat.TextField
                                        hintText="Unit Price"
                                        floatingLabelText="Unit Price"
                                        className="full-width-container"
                                        ref="unitprice"
                                        name="unitprice"
                                        required={true}
                                        type="text"
                                       
                                        onChange={this.handleInputChange}>
                                    </mat.TextField><br/>
                            <mat.RaisedButton type="submit"  label="Submit" primary={true} />
                        </form>
                     : null}
                       
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default AddPurchaseDetail;
                                    
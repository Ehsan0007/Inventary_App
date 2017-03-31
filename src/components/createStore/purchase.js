import React, { Component } from 'react';
import * as mat from 'material-ui';
import './createstore.css'

class Purchase extends Component{

    componentDidMount(){
        this.props.loadStockDetail();
    }


    render(){
     const stock =  this.props && this.props.application && this.props.application.stock ? this.props.application.stock : [] ;
     console.log("adsadsdsasadasdsadsadasdassad",stock)
        return(
            <div>
                  <mat.Card className="stock">
                    <mat.AppBar title="Purchase" showMenuIconButton={false}  />
                    <mat.CardText>
                      {stock && stock.length > 0 ?
                        <mat.Table displayCheckbox={false}>
                             <mat.TableHeader>
                            <mat.TableRow>
                                <mat.TableHeaderColumn>Store</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Product</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Quantity</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Unit Price</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Sale Volume</mat.TableHeaderColumn>
                                <mat.TableHeaderColumn>Time</mat.TableHeaderColumn>
                            </mat.TableRow>
                            </mat.TableHeader>
                             <mat.TableBody>
                                 {stock.map((data,index)=>{
                                     return(
                                         <mat.TableRow key={index}>
                                            
                                            <mat.TableRowColumn>{data.store}</mat.TableRowColumn>
                                            <mat.TableRowColumn>{data.productName}</mat.TableRowColumn>
                                            <mat.TableRowColumn>{data.quantity}</mat.TableRowColumn>
                                            <mat.TableRowColumn>{data.Unit}</mat.TableRowColumn>
                                            <mat.TableRowColumn>{data.saleVolume}</mat.TableRowColumn>
                                            <mat.TableRowColumn>{data.PurchasesDate}</mat.TableRowColumn>
                                          
                                        </mat.TableRow> 
                                     )
                                 })}
                                      
                            </mat.TableBody>
                        </mat.Table>
                     : null}
                       
                    </mat.CardText>
                </mat.Card>
            </div>
        )
    }
}

export default Purchase;
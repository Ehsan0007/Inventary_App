import React, { Component } from 'react';
import * as mat from 'material-ui';
import './createstore.css'

class SalesDetail extends Component{

    componentDidMount(){
        this.props.loadSaleDetail();
    }


    render(){

     const sale =  this.props && this.props.application && this.props.application.sale ? this.props.application.sale : [] ;
     console.log("afsdfdsfgusadsdsasadasdsadsadasdassad",sale)

    
        return(
            <div>
                  <mat.Card className="stock">
                    <mat.AppBar title="Sales Detail" showMenuIconButton={false}  />
                    <mat.CardText>
                      {sale && sale.length > 0 ?
                        <mat.Table>
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
                                {sale.map((data,index)=>{
                                    return(
                                        <mat.TableRow key={index} >
                                        <mat.TableRowColumn>{data.store}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.product}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.Quantity}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.Unit}</mat.TableRowColumn>
                                        <mat.TableRowColumn>{data.total}</mat.TableRowColumn>
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

export default SalesDetail;
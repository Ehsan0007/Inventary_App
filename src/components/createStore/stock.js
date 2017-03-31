import React, { Component } from 'react';
import * as mat from 'material-ui';
import './createstore.css'

class Stock extends Component {

    componentDidMount() {
        // this.props.loadStoreDetail();
        this.props.loadStockDetail();
    }


    render() {
        const stock = this.props && this.props.application && this.props.application.stockdata ? this.props.application.stockdata : [];
        // const store =  this.props && this.props.application && this.props.application.store ? this.props.application.store : [] ;
        console.log("Stock data is mai he ", stock)
        return (
            <div>
                <mat.Card className="stock">
                    <mat.AppBar title="Stock" showMenuIconButton={false} />
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
                                    </mat.TableRow>
                                </mat.TableHeader>
                                <mat.TableBody>
                                    {stock.map((data, index) => {
                                        return (
                                            <mat.TableRow key={index}>
                                                <mat.TableRowColumn>{data.store}</mat.TableRowColumn>
                                                <mat.TableRowColumn>{data.productName}</mat.TableRowColumn>
                                                <mat.TableRowColumn>{data.quantity}</mat.TableRowColumn>
                                                <mat.TableRowColumn>{data.Unit}</mat.TableRowColumn>
                                                <mat.TableRowColumn>{data.saleVolume}</mat.TableRowColumn>
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

export default Stock;
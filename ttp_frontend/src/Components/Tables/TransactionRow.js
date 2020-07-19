import React, { Component } from 'react'
class TransactionRow extends Component {

    state = {
        currentPrice: 0
    }

    
    render() {
        return (
            <div>
                <tr>
                  <td>tickerSymbol</td>
                  <td>Share Quantity</td>
                  <td>Original Price</td>
                  <td>Current Price</td>
                  <td>Gain/Loss</td>
                  <td>Total Value</td>
                </tr>
            </div>
        )
    }
}


export default TransactionRow

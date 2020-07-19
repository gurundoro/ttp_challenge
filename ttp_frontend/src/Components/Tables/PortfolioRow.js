import React, { Component } from 'react'
class PortfolioRow extends Component {

    state = {
        currentPrice: 0
    }

    
    render() {
        return (
            <div>
                <tr>
                  <td>tickerSymbol</td>
                  <td>Share Quantity</td>
                  <td>Current Price</td>
                  <td>Total Value</td>
                </tr>
            </div>
        )
    }
}


export default PortfolioRow
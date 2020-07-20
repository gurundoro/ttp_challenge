import React, { Component } from 'react'


class PortfolioRow extends Component {

    state = {
        currentPrice: 0
    }

    componentDidMount() {
        fetch(`https://api.iextrading.com/1.0/tops/last?symbols=${this.props.ticker}`)
          .then(res => res.json())
          .then(data => {
            if (data[0]) {
            console.log(data[0])
              this.setState({ currentPrice: data[0].price.toFixed(2)})
            }
          })
    }


    
    render() {

       const {ticker, share} = this.props
       let {currentPrice} = this.state
       let value = (parseInt(share) * parseFloat(currentPrice)).toFixed(2)

        return (
                <tr>
                  <td>{ticker}</td>
                  <td>{share}</td>
                  <td>{`$${currentPrice}`}</td>
                  <td>{`$${value}`}</td>
                </tr>
           
        )
    }
}


export default PortfolioRow
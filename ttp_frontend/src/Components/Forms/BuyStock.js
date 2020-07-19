import React, { Component } from 'react'

class BuyStockForm extends Component {
    
    state = {
        tickerSymbol: '',
        quantity: 0
    }

     handleChange = async(e) => {
     await this.setState({[e.target.name]:e.target.value});
      console.log(this.state)
    }



    render() {

        const {tickerSymbol, quantity} = this.state
        
        return (
          <>
          <form action="" onSubmit={((e) => this.props.handleOnSubmitBuyButton(e, tickerSymbol, quantity))}>
            <input type="text" name="tickerSymbol" value={tickerSymbol} onChange={e => this.handleChange(e)}/>
            <input type="number" name="quantity" value={quantity} onChange={(e) => this.handleChange(e)}/>
            <button>Buy</button>
          </form>  
          </>
        )
    }
}

export default BuyStockForm

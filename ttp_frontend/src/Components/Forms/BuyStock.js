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

        console.log(this.props)
        
        return (
          <>
          <form action="" onSubmit={((e) => this.props.handleOnSubmitBuyButton(e, tickerSymbol, quantity))}>
            <div class="form-group">
               <label for="exampleInputEmail1" className="text-center">Search Stocks</label>
               <input type="text" class="form-control" name="tickerSymbol" placeholder="Ticker Symbol" value={tickerSymbol} onChange={e => this.handleChange(e)} style={{width: '50%'}}/>
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Quantity</label>
              <input type="number" class="form-control"  name="quantity" value={quantity} onChange={(e) => this.handleChange(e)} style={{width: '50%'}}/>
            </div>
                <button type="submit" class="btn btn-primary">Buy</button>
          </form>  
          </>
        )

       
       
    } 
}

export default BuyStockForm

// <input type="text" name="tickerSymbol" value={tickerSymbol} onChange={e => this.handleChange(e)}/>
// <input type="number" name="quantity" value={quantity} onChange={(e) => this.handleChange(e)}/>
// <button>Buy</button>
import React, { Component } from 'react'
import Portfolio from '../Components/Tables/Portfolio'
import BuyStockForm from '../Components/Forms/BuyStock'
import Navbar from '../Components/Navbar/Navbar'



class PortfolioContainer extends Component {
   
    state = {
        tickerSymbol:'',
        quantity: 0,
        stockData: {},
        valid: true,
        refresh: false,
      }
       
      //function to start process of fetching and purchasing stock
       handleOnSubmitBuyButton = async (e, ticker, amount) => {
         e.preventDefault()
         await this.setState({tickerSymbol:ticker, quantity:amount}) 
         await this.fetchStock(ticker)
         
         const {tickerSymbol, quantity, stockData: {price}} = this.state
         
         if(this.state.valid === true){
         this.buyStock(this.props.user, tickerSymbol, price, quantity)
         }

         
      }
      
      //function to fetch stock from IEX API
       fetchStock = async (tickerSymbol) => {
         try{
         let response = await fetch(`https://cloud.iexapis.com/stable/stock/${tickerSymbol}/quote?token=pk_a1bdb3b5a0ef403ba560643968b4e8e4`)
         let data = await response.json()   
         await this.setState({stockData: {
            symbol: data.symbol,
            price: data.latestPrice
         }})
        } catch {
          await this.setState({valid:!this.state.valid})
          alert('Invalid Ticker')
        }
      
       }
     

       buyStock = (user, symbol, price,quantity) => {
         fetch("http://localhost:3000/api/v1/transactions", {
           method: "POST",
           headers: {
             "content-type": "application/json",
             "accepts": "application/json"
           },
           body: JSON.stringify(
     
             {
               transaction: {
                 share_quantity: quantity,
                 price_per:price,
                 user_id: user.id,
                 ticker_symbol: symbol
               }
             }
           )
         })
       }
     
       



    render() {

      const {transactions, user, logOut} = this.props

        return (
            <>
            <Navbar logOut={logOut} user={user}/>
            <div className="p-container">
               <Portfolio user={user} transactions={transactions}/>
               <BuyStockForm handleOnSubmitBuyButton={this.handleOnSubmitBuyButton} user={this.props.user}/>
            </div>
            </>
        )
    }
}


export default PortfolioContainer
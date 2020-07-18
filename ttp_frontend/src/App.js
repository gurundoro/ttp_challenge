import React from 'react';
import BuyStock from './Components/BuyStock'

class App extends React.Component{

 state = {
   tickerSymbol:'',
   quantity: 0
 }

  handleOnSubmitBuyButton = async (e, tickerSymbol, quantity) => {
     e.preventDefault()
     await this.setState({tickerSymbol:tickerSymbol, quantity:quantity})

     fetch(`https://cloud.iexapis.com/stable/stock/${tickerSymbol}/company?token=pk_a1bdb3b5a0ef403ba560643968b4e8e4`)
     .then(res => res.json())
     .then(data => console.log(data))

  }



  render(){
    
    return (
      <>
        <BuyStock handleOnSubmitBuyButton={this.handleOnSubmitBuyButton}/>
      </>
    );
  }
}

export default App;

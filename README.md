## Tech Talent Pipeline Challenge

This is a fullstack app built with a Ruby on Rails backend and React.js Frontend.

## User Stories

1. A user can create an account with their name, email and password
   * Default balance is $5000.00
   * A user can only register once with any given email

2. A user can authenticate via email and password to accesss their account 

3. A user can buy shares of stock at the current price by specifying its ticker symbol and the number of shares so they wish to invest in 
   * A user can only buy whole quantities of shares 
   * A user can only buy share if they have enough cash in their account for a given purchase 
   * A user can only buy shares if the tiker symbol is valid 

4. A user can view all transactions made to date 

5. A user can view thier portfolio with all thier stocks and their current value
  * Price is based on the latest price and quantity owned for a given stock 
  * Each stock owned only appears once 

6. A font color of stock symbols and current prices change dynamically to indicate performance
  * Dispaly red if less than yesterdays close 
  * Display grey when the current price is equal to yesterdays close
  * Display green when the current price is greater than the yesterdays close 
  (Instructions requested todays open instead of yesterdays close but could not find a free api to provide days open prices)


## Project Screen Shots  

![Alt text](https://user-images.githubusercontent.com/29901283/87977025-07a23000-ca9c-11ea-9042-6189407aabc5.png)
![Alt text](https://user-images.githubusercontent.com/29901283/87977044-0ffa6b00-ca9c-11ea-977f-9dddf1b97019.png)
![Alt text](https://user-images.githubusercontent.com/29901283/87977068-1852a600-ca9c-11ea-8da3-d15563b78b12.png)
![Alt text](https://user-images.githubusercontent.com/29901283/87977089-1e488700-ca9c-11ea-922d-0de9ac8575c2.png)


## API

Your API should conform to the following spec:

### POST /users ###
Example POST body:
```
    { user: {name:'Godfrey', email:'gmdzvairo@gmail.com', password: 'password' }
    
### POST /transactions ###
Example POST body:
```
    { transactions: { share_quantity: quantity, price_per:price, user_id: user.id, ticker_symbol: symbol' }

## Installation and Setup Instructions

Clone down this repository. You will need `homebrew`, `rails` and `npm` installed globally on your machine. Also make sure you have PostgreSQL to run the database

Installation:

1. In one tap open './ttp_backend' folder and run the following commands 
 * bundles install
 * rails db:create
 * rails db: migrate
 * rails s

2. In another tab open './ttp_frontend' and run the following commands 
  * npm install
  * npm start
  * y to confirm using an alternate port to localhost:3000 which is running the server based on the previous instructions.

To Visit App:

`localhost:3000  

## Reflection

Along this app was bootstrapped on the Frontend using create-react-app. Design was done with Bootstrap and CSS3. Other Libraries used include React-Router. Data was retrieved from the IEX and Cloud IEX apis.
The backend was built with Ruby on Rails and gem files used include BCRYPT and JWT.

Given more time I would have included unit tests.

Features I wish to add would be charts to track you stocks perfromance using the Chart.js library as I did [here](https://github.com/Kudzanayi-Dzvairo/covid-tracker-react)

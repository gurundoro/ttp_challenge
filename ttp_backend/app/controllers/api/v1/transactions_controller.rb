class Api::V1::TransactionsController < ApplicationController

    def create 
        Transaction.create(transaction_params)
        id = transaction_params[:user_id]
        user = User.find(id)
        balance = user.balance 
        total_price = transaction_params[:price_per] * transaction_params[:share_quantity]
        new_balance = balance - total_price
        @user = User.update(id, balance: new_balance)

        render json: { user:UserSerializer.new(@user)}
    end

    private 

    def transaction_params
        params.require(:transaction).permit(:ticker_symbol, :share_quantity, :price_per, :user_id)
    end 

end
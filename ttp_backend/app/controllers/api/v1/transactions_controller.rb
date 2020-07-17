class Api::V1::TransactionController < ApplicationController

    def create 
        Transaction.create(transaction_params)
        id = transaction_params[:user_id]
        user = User.find(id)
        balance = user.balance 
        total_price = transaction_params[:price] * transaction_params[:share]
        new_balance = balance - total_price
        @user = User.update(id, balance: new_balance)

        render json{ user:UserSerializer.new(@user)}
    end

    private 

    def transaction_params
        params.require(:transaction).permit(:ticker, :share, :price, :user_id)
    end 

end
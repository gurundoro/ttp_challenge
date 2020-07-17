class Api::V1::UsersController < ApplicationController
    skip_before_action only: [:create]

def create 
    puts 'Hello World'
    @user = User.create(user_params)

    
    render json: {user: UserSerializer.new(@user)}
end



def user_params 
    params.require(:user).permit(:id, :name, :email, :password)
    end
end
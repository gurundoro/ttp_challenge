class Api::V1::UsersController < ApplicationController

def create 
    @user = User.create(user_params)

    render json:{ user: UserSerializer.new(@user)}
end



def user_params 
    params.require(:user).permit(:name, :email, :password)
    end
end
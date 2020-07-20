class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

def create 
    puts 'Hello World'
    @user = User.create(user_params)
    if @user.valid?
        @token = encode_token(user_id: @user.id)
        render json: {user:UserSerializer.new(@user), jwt: @token}, status: :created
    else
        render json: {error: 'An account with this email exists already'}, status: :not_acceptable
   end
end

def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
end


def user_params 
    params.require(:user).permit(:name, :email, :password)
    end
end
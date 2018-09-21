class UsersController < ApplicationController
  #skip_before_action :verify_authentication



  
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])  
    if @user.update
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
  end

private

  def set_user
    @user = User.find(params[:id])
  end

  def users_params
    params.permit(:username, :password)
  end

end

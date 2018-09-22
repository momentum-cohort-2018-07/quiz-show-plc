class UsersController < ApplicationController
  skip_before_action :verify_authentication
  #before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user 
  end

  def create
    @user = User.new(users_params)

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

class Api::UsersController < ApplicationController
  skip_before_action :verify_authentication 
  before_action :set_user, only: [:show, :edit, :create, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  # def new
  #   @user = User.new
  # end

  def edit
    @user = User.find(params[:id])
  end
  

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
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

  # This destroy code works but I think it allows any logged-in user
  # to delete another user, not just the admin.

  def destroy
    @user = User.find(params[:id])
    @user.destroy
   
  end

  def verify_authentication
    user = authenticate_with_http_token do |token, options|
      User.find_by_api_token(token)
    end

    unless user
      render json: { error: "You don't have permission to access these resources" }, status: :unauthorized
    end
  end

  private
    def set_user
      # @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
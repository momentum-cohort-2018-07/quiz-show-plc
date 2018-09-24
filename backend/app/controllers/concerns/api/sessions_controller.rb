class Api::SessionsController < ApplicationController
  skip_before_action :verify_authentication

  def new
  end

  def create
    user = User.find_by_username(params[:username])

    if user && user.authenticate(params[:password])
      render json: @session
    else
      render json: @session, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    render json: @session.destroy
  end

end

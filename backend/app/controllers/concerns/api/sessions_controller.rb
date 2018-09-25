class Api::SessionsController < ApplicationController
  skip_before_action :verify_authentication

  def new
  end

  def create
    user = User.find_by_username(params[:username])

    if user && user.authenticate(params[:password])
      render json: { token: user.api_token, username: user.username }

    else
      render json: { error: "Invalid" }, status: :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    render json: @session.destroy
  end

end

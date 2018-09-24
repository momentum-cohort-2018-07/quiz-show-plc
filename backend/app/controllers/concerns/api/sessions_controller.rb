class API::SessionsController < ApplicationController
  skip_before_action :verify_authentication

  def create
    user = User.find_by_username(params[:username])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id]
      redirect_to root_path
    else
      flash[:error_mesage] = "Something went wrong! Please try again"
      redirect_to new_session_path 
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = "You've been successfully logged out"
    redirect_to root_path
  end

end

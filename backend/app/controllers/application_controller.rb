class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  helper_method :current_user
  helper_method :logged_in?
  helper_method :api_token_user

  # protect_from_forgery with: :null_session
  
  before_action :verify_authentication

  def verify_authentication
    user = authenticate_with_http_token do |token, options|
      User.find_by_api_token(token)
    end

    unless user
      render json: { error: "ACCESS DENIED" }, status: :unauthorized
    else
      @current_user = user
    end
  end


  protected
      def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
      end
  
      def logged_in?
        !!current_user
      end

      def api_token_user
        @api_token_user ||= authenticate_with_http_token do |token, options|
          User.find_by_api_token(token)
        end
      end
  
end

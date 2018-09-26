class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  helper_method :current_user
  helper_method :logged_in?
  helper_method :api_token_user

  # protect_from_forgery with: :null_session
  
  before_action :verify_authentication

  def verify_authentication
    unless current_user
      render json: {error: "Unauthorized, access denied."}, status: :unauthorized
    end
  end

  protected
      def current_user
        @current_user ||= authenticate_with_http_token do |token, options|
          @current_user = User.find_by_api_token(token)
        end
      end

      def get_user
        @current_user
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
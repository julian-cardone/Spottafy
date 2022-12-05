class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection
  
    rescue_from StandardError, with: :unhandled_error
    rescue_from ActionController::InvalidAuthenticityToken,
      with: :invalid_authenticity_token
    
    protect_from_forgery with: :exception
    before_action :snake_case_params, :attach_authenticity_token

    def curernt_user
        @curernt_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        sessoin[:session_token] = user.reset_session_token!
    end

    def logout
        curernt_user.reset_session_token if curernt_user
        session[:session_token] = nil
        @curernt_user = nil
    end

    def require_logged_in
        unless curernt_user
            render json: { message: 'Must be logged in' }, status: :unauthorized
        end
    end

    private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
        #anytime there is a capital letter, make it lowercase and add an underscore before it 
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end

    def invalid_authenticity_token
        render json: { message: 'Invalid authenticity token' }, 
          status: :unprocessable_entity
    end

    # def unhandled_error(error)
    #     if request.accepts.first.html?
    #       raise error
    #     else
    #       @message = "#{error.class} - #{error.message}"
    #       @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
    #       render 'api/errors/internal_server_error', status: :internal_server_error
          
    #       logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
    #     end
    #   end
end

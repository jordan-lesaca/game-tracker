class SessionsController < ApplicationController
    # skip_before_action :authorize, only: :create    

    def create #Login
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def destroy #Logout
        session.delete :user_id
    end

end

    # #Login
    # def create 
    #     user = User.find_by(username: params[:username]) #When we find the user, 
    #     #we are setting that ID equal to that user.id key to that session hash
    #     session[:user_id] = user.id#user_id. This makes sure user exist in db. 
    #     #Sets the sessions ID equal to the user id. 
    #     render json: user
    # end

    # #Logout
    # def destroy
    #     session.delete :user_id 
    #     head :no_content
    # end
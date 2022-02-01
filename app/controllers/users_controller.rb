class UsersController < ApplicationController

    def index
        user = User.all
        render json: user
    end

    def show
        user = User.(params[:id])
        render json: user
    end

    

end
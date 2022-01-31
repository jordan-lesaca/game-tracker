class GamesController < ApplicationController
    #fullCRUD

    def index #Render All
        games = Game.all
        render json: games
    end

    def create #Create One
        game = Game.create
        render json: game
    end

    def update
        game = Game.find(params[:id])
        game.update
        render json: game
    end

    private

    def game_params
        params.require(:game).permit(:title, :release_year, :genre, :user_id)
    end

end

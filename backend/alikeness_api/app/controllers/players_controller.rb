class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players, only: [:name, :score]
  end

  def new
  end

  def create
    player = Player.new(params.require(:player).permit(:name, :score))
    if player.save
      render json: ["Success!"]
    else
      render json: player.errors.full_messages
    end
  end

end

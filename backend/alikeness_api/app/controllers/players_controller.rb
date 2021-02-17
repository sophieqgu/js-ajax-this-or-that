class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players, only: [:name, :score]
  end

  def create
    player = Player.new(params.require(:player).permit(:name, :score))
    if player.save
      render json: player, only: [:id]
    else
      render json: player.errors.full_messages
    end
  end

  def show
    player = Player.find(params[:id])
    render json: player
  end

end

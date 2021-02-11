class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players, only: [:name, :score]
  end

  def new
  end

  def create
    @player = Player.create(params.require(:player).permit(:name, :score))
  end

end

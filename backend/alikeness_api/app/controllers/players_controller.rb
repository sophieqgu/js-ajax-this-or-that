class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players, only: [:name]
  end

end

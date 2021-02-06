class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players, only: [:name]
  end

  def new
  end

  def create
    @player = Player.create(name: params[:name])

  end

end

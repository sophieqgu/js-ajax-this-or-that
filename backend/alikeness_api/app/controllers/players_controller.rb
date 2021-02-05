class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players, only: [:name]
  end

  def new
  end

  def create
    @player = Player.new(name: params[:name])
    if !@player.save
      render :index
    end
  end

end

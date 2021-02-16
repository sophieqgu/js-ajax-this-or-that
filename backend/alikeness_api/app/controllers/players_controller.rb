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
      render json: {success: true}
    else
      render json: player.errors.full_messages
    end
  end

  def show
    player = Player.find_by(name: params[:id])
    render json: player
  end

  def edit
  end

  def update
  end

  def delete
  end

end

class CommentsController < ApplicationController
  def index
    comments = Player.find_by(name: params[:id]).comments
    render json: comments
  end
end

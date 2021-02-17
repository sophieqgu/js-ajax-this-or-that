class CommentsController < ApplicationController
  def index
    if params[:player_id]
      comments = Player.find_by(name: params[:player_id]).comments
      render json: comments, only: [:content]
    end
  end

  def create
    if params[:player_id]
      comment = Player.find(params[:player_id]).comments.build(params.require(:comment).permit(:content))
      if comment.save
        render json: comment, only: [:content];
      else
        render json: comment.errors.full_messages
      end
    end
  end
end

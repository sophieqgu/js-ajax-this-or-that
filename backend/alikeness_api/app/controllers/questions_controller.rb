class QuestionsController < ApplicationController
  def index
    questions = Question.all
    render json: questions
  end

  def update
    question = Question.find(params[:id])
    question.update(params.require(:question).permit(:numCorrect, :numIncorrect))
  end



end

class Api::ScoresController < ApplicationController
  def index
  end

  def show
    @score = Scores.find(params[:id])
  end

  def create
    @quiz = Quiz.find(params[:quiz_id])
    @correct_count = 0
    @submitted = params[:answer_id]
    
    @submitted.each do |said|
      if Answer.find(said).correct?
        @correct_count += 1
      end
      @correct_count
    end

    Score.create!(
      { "quiz_id": params[:quiz_id],
        "submission": params[:answer_id],
        "user_id": current_user.id,
        "score": @correct_count
      }
    )
    # render json: { "score": @correct_count }
  end

  def destroy
  end

  private

  def scores_params
    params.permit(:answers_id)
  end
end

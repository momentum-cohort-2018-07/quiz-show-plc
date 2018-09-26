class Api::ScoresController < ApplicationController
  def index
  end

  def show
    @score = Scores.find(params[:id])
  end

  def create 
    score = params["score"]
    @user_id = get_user[:id]
    
    @score = 0
    size = 0
    answers_array = score["answers"]
    answers_array.each do |answer|
        answer_id = answer[:answer]
        
        @answer=Answer.find(answer_id)
            if @answer.correct == true
                 @score += 1
            end
    end

    @question_id = @answer.question_id
    @question = Question.find(@question_id)
    @quiz_id = @question.quiz_id

    size = answers_array.length
    @score = (@score.to_f/size)*100
    @score = @score.floor

    @result = Score.new(quiz_id: @quiz_id, score: @score, user_id: @user_id)
    @result.score = @score
    if @result.save
        render "api/scores/show.json", status: :created
    else
        render json: @result.errors, status: :unprocessable_entity
    end 
  end

  def destroy
  end

  private

  def scores_params
    params.permit(:answers_id)
  end
end

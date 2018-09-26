class Api::ScoresController < ApplicationController
  def index
  end

  def show
    @score = Scores.find(params[:id])
  end

  def create 
    result = params["result"]
    @user_id = current_user[:id]
    
    @score = 0
    size = 0
    
    # loop to extract questions and answers
    answers_array = result["answers"]
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

    @result = Result.new(quiz_id: @quiz_id, score: @score, user_id: @user_id)
    @result.score = @score
    if @result.save
        render "api/results/show.json", status: :created
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

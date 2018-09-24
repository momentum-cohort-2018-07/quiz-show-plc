class Api::AnswersController < ApplicationController
  skip_before_action :verify_authentication

  def index
    @answers = Answer.all
    @answers = @answer.questions.includes(:answers)
    render json: @answer
  end

  def show
    @answer = Answer.find(params[:id])
    @answers = @answer.questions.includes(:answers)
    render json: @answers
  end

  def new
    if current_user
      @answer = Answer.new
      @question = Question.find(params[:question_id])
    else
      flash[:notice] = "You must be logged in to post an answer."
    end
  end

  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render json: @answer, status: :created, location: @question
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  def udpate
    if @answer.update(answer_params)
      render json: @answer
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @answer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params["question_id"])
    end

    def set_answer
      @answer= Answer.find(params["id"])
    end

    # Only allow a trusted parameter "white list" through.
    def answer_params
      params.require(:answer).permit(:text, :question_id, :correct)
    end
end

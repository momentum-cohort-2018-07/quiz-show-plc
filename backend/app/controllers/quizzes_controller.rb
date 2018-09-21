class QuizzesController < ApplicationController
  def index
    @quiz = Quiz.all
    render json: @quiz
  end

  def create
    @quiz = Quiz.new(quiz_params)

    if @quiz.save
      render json: @quiz, status: :created, location: @quiz
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def show
    @quiz = Quiz.find(params[:id])
    render json: @quiz
  end

  def edit 
    @quiz = Quiz.find(params[:id])
  end

  def update
    @quiz = Quiz.find(params[:id])
    if @quiz.update
      render json: @quiz, status: :created, location: @quiz
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    @quiz.destroy
    render json: @quiz
  end

  private

  def question_params
    params.require(:question).permit(:text)
  end
end

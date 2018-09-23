class QuestionsController < ApplicationController
  def index
    @question = Question.all
    render json: @question
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render json: @question, status: :created, location: @quiz
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def show
    @question = Question.find(params[:id])
    render json: @question
  end

  def edit 
    @question = Question.find(params[:id])
  end

  # This destroy code works but I think it allows any logged-in user
  # to delete a question, not just the admin.

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
   
  #  redirect_to question_path(@question)
  end

  private

  def question_params
    params.require(:question).permit(:text, :quiz_id)
  end

end



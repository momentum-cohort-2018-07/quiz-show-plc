class Api::QuizzesController < ApplicationController
  skip_before_action :verify_authentication, only: [:index]
  before_action :set_quiz, only: [:show, :update, :destroy]
  
  def index
    @quizzes = Quiz.all
    render json: @quiz
  end

  def published_quizzes
    @quizzes = Quiz.where({published: true, user_id: params[:user_id]})
    render :index, location: api_quizzes_url
  end

  def unpublished_quizzes
    @quizzes = Quiz.where({published: false, user_id: params[:user_id]})
    render :index, location: api_quizzes_url
  end

  def show
    @quiz = Quiz.find(params[:id])
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

  # def create
  #   if !logged_in?
  #     render json: {error: "You must sign in to create a quiz."}, status: :unauthorized
  #   elsif !current_user.admin
  #     render json: {error: "You must be an admininistrator to create a quiz."}, status: :unauthorized
  #   else
  #     @quiz = Quiz.new(title: quiz_params[:title], user_id: current_user.id)
  #     if @quiz.save
  #       render :show, status: :created, location: api_quiz_url(@quiz)
  #     else
  #       render json: @quiz.errors, status: :unprocessable_entity
  #     end
  #   end
  # end

  def update
    @quiz = Quiz.find(params[:id])  
    if @quiz.update(quiz_params)
      render json: @quiz, status: :created, location: @quiz
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # def update
  #   if current_user.id != @user.id
  #     render json: {error: "You must be the administrator to update this quiz."}, status: :unauthorized
  #   else
  #     if @quiz.update(quiz_params)
  #       render :show, status: :updated, location: api_quiz_url(@quiz)
  #     else
  #       render json: @quiz.errors, status: :unprocessable_entity
  #     end
  #   end
  # end

  # def publish
  #   @quiz = Quiz.find(params[:quiz_id])
  #   @user = @quiz.user
  #   if current_user.id != @user.id
  #     render json: {error: "Must be the owner to publish this quiz"}, status: :unauthorized
  #   elsif Answer.where(question_id: Question.where('quiz_id = ?', @quiz.id)).where('correct = ?', true).length < @quiz.questions.count
  #     render json: {error: "All questions must have a correct answer before publishing"}, status: :unprocessable_entity
  #   elsif Answer.where(question_id: Question.where('quiz_id = ?', @quiz.id)).where('correct = ?', true).length > @quiz.questions.count
  #     render json: {error: "One of more questions have multiple correct answer. Please fix before publishing"}, status: :unprocessable_entity
  #   else
  #     if @quiz.update(published: true)
  #       @quiz.questions.sort_by(&:created_at).each_with_index do |question, index|
  #         question.update(number: index + 1)
  #       end
  #       render :show, status: :updated, location: api_quiz_url(@quiz)
  #     else
  #       render json: @quiz.errors, status: :unprocessable_entity
  #     end
  #   end
  # end

  # This destroy code works but I think it allows any logged-in user
  # to delete a quiz, not just the admin.
  def destroy
    @quiz = Quiz.find(params[:id])
    @quiz.destroy
  end

  # def destroy
  #   if current_user.id != @user.id
  #     render json: {error: "Must be the owner to delete this quiz"}, status: :unauthorized
  #   elsif @quiz.published
  #     render json: {error: "Cannot delete a published quiz"}, status: :unauthorized
  #   else
  #     @quiz.destroy
  #   end
  # end

  private

  def quiz_params
    params.permit(:title)
  end

  def set_quiz
    @quiz = Quiz.find(params[:id])
    #@user = @quiz.user
  end
end
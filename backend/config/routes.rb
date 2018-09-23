Rails.application.routes.draw do
  resources :users

  # get 'answers/index'
  # get 'answers/create'
  # get 'answers/udpate'
  # get 'answers/destroy'

  resources :quizzes do 
    resources :questions
  end

  resources :answers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
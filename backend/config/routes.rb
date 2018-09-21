Rails.application.routes.draw do
  get 'questions/index'
  get 'questions/create'
  get 'questions/show'
  get 'questions/destroy'
  get 'answers/index'
  get 'answers/create'
  get 'answers/udpate'
  get 'answers/destroy'
  get 'quizzes/index'
  get 'quizzes/create'
  get 'quizzes/udpate'
  get 'quizzes/destroy'
  get 'users/index'
  get 'users/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

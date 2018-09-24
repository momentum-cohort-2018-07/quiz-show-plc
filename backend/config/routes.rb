Rails.application.routes.draw do
  namespace :api do
    resource :session, only: [:new, :create, :destroy]
  
<<<<<<< HEAD
  root 'quizzes#index'

  resources :users
=======
    root 'quizzes#index'
    resources :users
>>>>>>> bace5e25281869560c48f69f00e2060db1f90c2d

  
    resources :users
    resources :quizzes do 
      resources :questions do
        resources :answers
      end
  end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
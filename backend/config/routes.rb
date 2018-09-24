Rails.application.routes.draw do

  resource :session, only: [:new, :create, :destroy]
  
  root 'quizzes#index'
  resources :users

  resources :quizzes do 
    resources :questions do
      resources :answers
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
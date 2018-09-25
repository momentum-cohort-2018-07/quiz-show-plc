Rails.application.routes.draw do
  namespace :api do
    resource :session, only: [:new, :create, :destroy]
  
    root 'quizzes#index'
    resources :users
    post 'login', to: 'login#create'

    resources :quizzes do 
      resources :questions do
        resources :answers
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
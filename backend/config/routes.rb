Rails.application.routes.draw do
  # get 'scores/index'
  # get 'scores/show'
  # get 'scores/create'
  # get 'scores/destroy'
  
  namespace :api do
    resource :session, only: [:new, :create, :destroy]
  
    root 'quizzes#index'
    resources :users
    resources :scores, only:[:index, :create, :show]
    resources :quizzes do 
      resources :questions do
        resources :answers
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
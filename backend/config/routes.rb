Rails.application.routes.draw do

  resource :session, only: [:new, :create, :destroy]
  
  root 'quizzes#index'


  resources :users

<<<<<<< HEAD
  # get 'answers/index'
  # get 'answers/create'
  # get 'answers/udpate'
  # get 'answers/destroy'


=======
>>>>>>> 7c142c414c6e12fc6b21b9595d43a892aba0e866
  resources :quizzes do 
    resources :questions do
      resources :answers
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
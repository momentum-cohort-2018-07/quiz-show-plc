class User < ApplicationRecord
  # has_many :quiz_scores
  # has_many :quizzes, through: :quiz_scores
  # has_many :created_quizzes, class_name: 'Quiz', foregin_key: :admin_id

  has_secure_password
  has_secure_token :api_token
end
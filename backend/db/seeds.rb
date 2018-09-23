# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

User.create!(
  username: 'admin',
  email: 'admin@admin.com',
  password: 'admin1',
  admin: true
)

User.create!(
  username: 'user',
  email: 'user@user.com',
  password: 'user01'
)

CSV.foreach('db/quizzes.csv', headers: true) do |row|
  Quiz.create!(row.to_h)
end

CSV.foreach('db/questions.csv', headers: true) do |row|
  Question.create!(row.to_h)
end

CSV.foreach('db/answers.csv', headers: true) do |row|
  Answer.create!(row.to_h)
end

ActiveRecord::Base.connection.tables.each do |t| 
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end
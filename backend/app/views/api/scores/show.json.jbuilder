json.result  do
    json.user_id @score.user_id
    json.quiz_id @score.quiz_id
    json.score @score.score
  end
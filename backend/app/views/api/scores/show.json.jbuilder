json.result  do
    json.user_id @result.user_id
    json.quiz_id @result.quiz_id
    json.result @result.score
  end
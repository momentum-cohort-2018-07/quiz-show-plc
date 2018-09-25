json.user do
  json.api_token @user.api_token
  json.id @user.id
  json.username @user.username
  json.role @user.role
end
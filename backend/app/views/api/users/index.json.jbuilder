json.users @users do |user|
    json.user do
       json.id user.id
       json.name user.name
       json.username user.username
       json.token user.api_token
    end 
end
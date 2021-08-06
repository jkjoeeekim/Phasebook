json.extract! user, :id, :first_name, :last_name, :email, :picture_url
json.friends user.friends do |friend|
  json.id friend.id
  json.first_name friend.first_name
end
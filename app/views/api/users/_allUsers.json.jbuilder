json.array! users do |user|
  json.id user.id
  json.first_name user.first_name
  json.last_name user.last_name
  # debugger
  if user.picture_url.empty? || !user.picture_url
    user.picture_url = url_for(user.photo)
    user.save
  end
  json.picture_url user.picture_url
end
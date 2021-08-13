if !user.picture_url || user.picture_url.empty? 
  user.picture_url = url_for(user.photo)
  user.save
end
json.extract! user, :id, :first_name, :last_name, :email, :picture_url
friends = user.friendships.where(active: true)
json.friends friends do |friend|
  json.id friend.friend_id
end

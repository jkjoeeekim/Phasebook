require 'open-uri'
default = open('https://fazebook-seeds.s3.us-west-1.amazonaws.com/default3.jpg')


if !user.picture_url || user.picture_url.empty?
  if user.photo.attached?
    user.picture_url = url_for(user.photo)
    user.save
  else
    user.photo.attach(io: default, filename: 'default3.jpg')
    user.picture_url = url_for(user.photo)
    user.save
  end
end
json.extract! user, :id, :first_name, :last_name, :email, :picture_url
json.set! posts do
  json.array! posts do |post|
    json.body post.body
    json.author_id post.author_id
    json.post_id post.post_id
    json.user_id post.user_id
    json.picture_id post.picture_id
  end
end

json.likes do
  json.array! likes do |post|
    json.id post.id
  end
end

json.friends friends
json.set! users do
  json.array! users do |user|
    json.id user.id
    json.first_name user.first_name
    json.last_name user.last_name
    if !user.picture_url || user.picture_url.empty?
      if user.photo.attached?
        user.picture_url = url_for(user.photo)
        user.save
      else
        user.picture_url = `https://fazebook-seeds.s3.us-west-1.amazonaws.com/default3.jpg`
        user.save
      end
    end
    json.picture_url user.picture_url
  end
end

json.set! likes do
  json.array! likes do |post|
    json.id post.id
    json.body post.body
  end
end
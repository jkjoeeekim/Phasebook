json.array! likes do |like|
  json.id like.id
  json.user_id like.user_id
  json.post_id like.post_id
end
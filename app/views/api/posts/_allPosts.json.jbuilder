json.array! posts do |post|
  json.id post.id
  json.body post.body
  json.author_id post.author_id
  json.user_id post.user_id
  json.post_id post.post_id
  json.created_at post.created_at
  json.updated_at post.updated_at
end
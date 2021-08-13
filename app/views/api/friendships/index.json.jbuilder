if @reqs.length > 0 
  json.reqs do
    json.array! @reqs do |req|
      json.id req.id
      json.user_id req.user_id
      json.friend_id req.friend_id
      json.active req.active
    end
  end
end

if @inc_reqs.length > 0 
  json.inc_reqs do
    json.array! @inc_reqs do |req|
      json.id req.id
      json.user_id req.user_id
      json.friend_id req.friend_id
      json.active req.active 
    end
  end
end
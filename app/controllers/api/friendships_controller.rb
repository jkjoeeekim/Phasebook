class Api::FriendshipsController < ApplicationController
  def index
    friendships = Friendship.where(user_id: params[:userId])
    inc_friendship = Friendship.where(friend_id: params[:userId])
    @reqs = friendships.select{ |req| !req.active }
    @inc_reqs = inc_friendship.select{ |req| !req.active }
    render 'api/friendships/index'
  end
  
  def create
    @req = Friendship.new(friendship_params)
    @prevReq = Friendship.where(user_id: @req.friend_id).where(friend_id: @req.user_id)[0]
    if !!@prevReq
      @req.update(active: true)
      if @req.save
        @prevReq.update(active: true)
        render 'api/friendships/formed'
      end
    elsif @req.save
      render 'api/friendships/request'
    else
      @errors = @req.errors.json.full_messages
      render @errors
    end
  end

  def destroy

  end

  private
  def friendship_params 
    params.require(:friendship).permit(:user_id, :friend_id, :active)
  end
end

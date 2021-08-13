class Api::SessionsController < ApplicationController
  # Website log in with existing account
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      all_friendships = @user.friendships.where(active: true)
      @friends = all_friendships.map{ |friendship| friendship.friend_id }
      login!(@user)
      render "api/posts/show"
    else
      @error = {
        session: ["Invalid email and/or password"]
      }
      render json: @error, status: 401
    end
  end

  # Website log out of account
  def destroy
    logout!
  end
end

class Api::SessionsController < ApplicationController
  # Website log in with existing account
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      @friends = @user.friends.map{ |friend| friend.id }
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

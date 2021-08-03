class Api::SessionsController < ApplicationController
  # Website log in with existing account
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render "api/posts/show"
    end
  end

  # Website log out of account
  def destroy
    logout!
  end
end

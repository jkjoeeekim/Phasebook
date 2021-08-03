class Api::UsersController < ApplicationController
  # Create a new user
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/posts/show"
    else

    end
  end

  def show
    @user = User.find_by(params[:user_id])
    render "api/users/show"
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :birthday, :gender, :workplace, :college, :high_school, :current_city, :city, :hometown, :relationship_status, :relationship_id, :religious_views, :language, :address, :phone_number, :password)
  end
end

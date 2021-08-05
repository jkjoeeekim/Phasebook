class Api::UsersController < ApplicationController
  # Create a new user
  def index
    @users = User.all
    render "api/users/index"
  end
  
  def create
    @user = User.new(user_params)
    @friends = @user.friends
    if @user.save
      login!(@user)
      render "api/posts/show"
    else
      render json: {user: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:user_id])
    @friends = @user.friends
    render "api/users/show"
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :birthday, :gender, :workplace, :college, :high_school, :current_city, :city, :hometown, :relationship_status, :relationship_id, :religious_views, :language, :address, :phone_number, :password)
  end
end

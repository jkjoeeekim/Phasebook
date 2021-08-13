class Api::UsersController < ApplicationController
  # Create a new user
  def index
    @users = User.all
    @user = current_user
    render "api/users/index"
  end
  
  def create
    @user = User.new(user_params)
    @bobby_bob = User.where('email ILIKE ?', 'bobby@bob.com').ids.first
    if @user.save
      fship1 = Friendship.create({user_id: @bobby_bob, friend_id: @user.id, active: true})
      fship2 = Friendship.create({user_id: @user.id, friend_id: @bobby_bob, active: true})
      all_friendships = @user.friendships.where(active: true)
      @friends = all_friendships.map{ |friendship| friendship.friend_id }
      login!(@user)
      render "api/posts/show"
    else
      render json: {user: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:user_id])
    all_friendships = @user.friendships.where(active: true)
    @friends = all_friendships.map{ |friendship| friendship.friend_id }
    render "api/users/show"
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :birthday, :gender, :workplace, :college, :high_school, :current_city, :city, :hometown, :relationship_status, :relationship_id, :religious_views, :language, :address, :phone_number, :password)
  end
end

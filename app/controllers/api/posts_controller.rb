class Api::PostsController < ApplicationController
  def index
    @posts = Post.all.select{ |post| !post.userprofile }
    render "api/posts/index"
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages
    end
  end

  def show
    @post = Post.find_by(params[:post_id])
    render "api/posts/show"
  end

  def destroy

  end

  private
  def posts_params
    params.require(:post).permit(:body, :author_id, :post_id, :user_id, :picture_id)
  end
end

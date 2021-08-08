class Api::PostsController < ApplicationController
  def index
    # select all posts that don't belongs_to userprofile
    @posts = Post.all.select{ |post| !post.userprofile }
    render "api/posts/index"
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      # select all posts that don't belongs_to userprofile
      @posts = Post.all.select{ |post| !post.userprofile }
      render "api/posts/index"
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
  def post_params
    params.require(:post).permit(:body, :author_id, :post_id, :user_id, :picture_id)
  end
end

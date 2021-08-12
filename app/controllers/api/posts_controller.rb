class Api::PostsController < ApplicationController
  def index
    # select all posts that don't belongs_to userprofile
    @posts = Post.all
    @likes = Like.all
    render "api/posts/index"
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      # select all posts that don't belongs_to userprofile
      @posts = Post.all
      render "api/posts/new"
    else
      render json: @post.errors.full_messages
    end
  end

  def show
    @post = Post.find_by(params[:post_id])
    render "api/posts/show"
  end

  def update
    
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.delete
    @post.save
    render "api/posts/delete"
  end

  private
  def post_params
    params.require(:post).permit(:body, :author_id, :post_id, :user_id, :picture_id)
  end
end

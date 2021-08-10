class Api::CommentsController < ApplicationController
  def index
    @comments = Hash.new{ |h, k| h[k] = [] };
    Post.all.each do |post|
      if post.post
        @comments[post.post.id].push(post.id)
      end
    end
    render "api/comments/index"
  end

  def create
    @comment = Post.new(post_params)
    if @comment.save
      render "api/comments/new"
    else
      render @comment.errors.full_messages
    end
  end

  def update

  end

  def destroy
    
  end

  private
  def post_params
    params.require(:comment).permit(:body, :author_id, :post_id, :user_id, :picture_id)
  end
end

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
end

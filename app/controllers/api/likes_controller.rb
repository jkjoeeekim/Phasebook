class Api::LikesController < ApplicationController
  def show
    @likes = Like.all.select{ |like| like.post_id == params[:post_id] }
    render 'api/likes/show'
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render 'api/likes/new'
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    # debugger
    @like.destroy
    @like.save
    render "api/likes/delete"
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end

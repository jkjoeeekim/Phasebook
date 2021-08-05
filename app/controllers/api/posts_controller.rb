class Api::PostsController < ApplicationController
  def index

  end

  def create

  end

  def show

  end

  def destroy

  end

  private
  def posts_params
    params.require(:post).permit(:)
  end
end

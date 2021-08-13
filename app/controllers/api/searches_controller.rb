class Api::SearchesController < ApplicationController
  def show
    query_name = '%' + params[:userName] + '%'
    @users = User.where("first_name ILIKE ?", query_name)
    render 'api/search/show'
  end


end

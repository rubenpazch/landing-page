class Api::V1::RestaurantsController < ApplicationController
  # Only allow a trusted parameter "white list" through.
  def show
    render json: RestaurantSerializer.new(Restaurant.find(params[:id]))
  end
  
  # Only allow a trusted parameter "white list" through.
  def index
    @restaurants = Restaurant.all
    render json: RestaurantSerializer.new(Restaurant.all, include: %i[comments pictures]).serializable_hash
  end
end

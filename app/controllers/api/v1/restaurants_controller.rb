class Api::V1::RestaurantsController < ApplicationController
  def show
    render json: RestaurantSerializer.new(Restaurant.find(params[:id]))
  end

  def index
    @restaurants = Restaurant.all
    render json: RestaurantSerializer.new(Restaurant.all, include: %i[comments pictures]).serializable_hash
  end
end

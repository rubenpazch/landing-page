require "test_helper"

class Api::V1::RestaurantsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  setup do
    @restaurant = restaurants(:one)
  end

  test "should show a restaurant" do
    get api_v1_restaurant_url(@restaurant), as: :json
    assert_response :success

    json_response = JSON.parse(self.response.body)
    assert_equal @restaurant.title, json_response['data']['attributes']['title']
  end

  test "should show restaurants" do
    get api_v1_restaurants_url(@restaurant), as: :json
    assert_response :success
  end
end

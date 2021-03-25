require "test_helper"

class Api::V1::PicturesControllerTest < ActionDispatch::IntegrationTest

  setup do
    @pictures = pictures(:one)
  end

  test "should show pictures" do
    get api_v1_pictures_url(), as: :json
    assert_response :success
  end
end

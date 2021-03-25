require "test_helper"

class Api::V1::CommentsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  setup do
    @comment = comments(:one)
    @restaurant = restaurants(:one)
  end

  test 'should create a comment' do
    assert_difference('Comment.count')do
      post api_v1_comments_url, params: { comment: { 
        description: @comment.description, 
        commentDate: @comment.commentDate, 
        usuario: @comment.usuario,
        restaurant_id: @restaurant.id }}, as: :json
    end
    assert_response :created
  end

  test 'should forbid create comment' do
    assert_no_difference('Comment.count') do
      post api_v1_comments_url, params: { comment: { 
        description: @comment.description, 
        commentDate: @comment.commentDate, 
        usuario: @comment.usuario,
        restaurant_id: -1 }}, as: :json
    end
    assert_response :unprocessable_entity
  end
  
  test "should show comments" do
    get api_v1_comments_url(), as: :json
    assert_response :success
  end
end

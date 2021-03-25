class Api::V1::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    
    if @comment.save
      render json: CommentSerializer.new(@comment).serializable_hash, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def index
    render json: CommentSerializer.new(Comment.all).serializable_hash
  end

  private
  def comment_params
    params.require(:comment).permit(:description, :commentDate, :usuario, :restaurant_id)
  end
end

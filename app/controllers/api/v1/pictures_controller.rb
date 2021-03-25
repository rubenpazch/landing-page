class Api::V1::PicturesController < ApplicationController
  def index
    render json: PictureSerializer.new(Picture.all).serializable_hash
  end
end

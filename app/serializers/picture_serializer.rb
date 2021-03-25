class PictureSerializer
  include FastJsonapi::ObjectSerializer
  attributes :link
  belongs_to :restaurant
end

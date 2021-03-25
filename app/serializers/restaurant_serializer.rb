class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
  has_many :comments
  has_many :pictures
end

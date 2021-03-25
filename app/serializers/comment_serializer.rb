class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :commentDate, :usuario
  belongs_to :restaurant
end

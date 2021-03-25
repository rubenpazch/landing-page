class Restaurant < ApplicationRecord
  has_many :comments
  has_many :pictures
end

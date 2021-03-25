require 'swagger_helper'

describe 'Restaurants API' do
  path '/api/v1/restaurants' do
    get 'get restaurants' do 
      tags 'Restaurants'
      consumes 'application/json'      
      response 200
      
    end
  end
end
Rails.application.routes.draw do
  #get 'home/index'
  root to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do
    namespace :v1 do
      resources :restaurants, only: %i[show index]
      resources :pictures, only: %i[index]
      resources :comments, only: %i[create index]
    end
  end
end

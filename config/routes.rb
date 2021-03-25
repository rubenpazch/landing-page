Rails.application.routes.draw do
  root to: 'home#index'
  # mount Rswag::Ui::Engine => '/api-docs'
  # mount Rswag::Api::Engine => '/api-docs'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do
    namespace :v1 do
      resources :restaurants, only: %i[show index]
      resources :comments, only: %i[create]
    end
  end
end

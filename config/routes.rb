Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:show]
    resources :playlists
  end

  get '*path', to: "static_pages#frontend_index"

end

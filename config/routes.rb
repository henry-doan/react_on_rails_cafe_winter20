Rails.application.routes.draw do

  namespace :api do
    resources :menus do
      resources :items
    end
  end

  get '*other', to: 'static#index'
end

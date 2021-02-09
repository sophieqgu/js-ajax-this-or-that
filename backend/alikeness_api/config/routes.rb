Rails.application.routes.draw do
  resources :questions, only: [:index, :update];
  resources :players, only: [:index, :new, :create];
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

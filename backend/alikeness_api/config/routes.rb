Rails.application.routes.draw do
  resources :comments
  resources :questions, only: [:index, :update];
  resources :players, only: [:index, :new, :create, :show] do
    resources :comments
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :questions, only: [:index, :update];
  resources :players, only: [:index, :create, :show] do
    resources :comments, only: [:index, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

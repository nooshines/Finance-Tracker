Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users
    resources :incomes
    resources :expenses
    get 'auth/status', to: 'auth#status'
    post 'auth/login', to: 'auth#login'
  end
end

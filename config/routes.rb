Rails.application.routes.draw do
  namespace "api", defaults: {format: :json} do
    resources :todos do
      resources :steps, only: [:create, :index]
    end
    resources :steps, only: [:update, :destroy]
  end
  
  root to: 'static_pages#root'

end

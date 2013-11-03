PopDensity::Application.routes.draw do
 
  root 'home#index'

  get '/countries' => 'countries#index'

end

PopDensity::Application.routes.draw do
 
  root 'countries#index'

  get '/countries' => 'countries#index'

end

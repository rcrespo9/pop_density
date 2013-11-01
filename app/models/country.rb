class Country
  include Mongoid::Document
  field :name, type: String
  field :pop_density, type: Integer

  index({ starred: 1 })
end

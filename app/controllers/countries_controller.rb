class CountriesController < ApplicationController

	def index
		@countries = Country.all
		@countries.collection.find(params[:id])
		# @country = Country.find(params[:index])
	end

	# def get_density
	# 	@country = Country.find(params[:index])
	# end
end

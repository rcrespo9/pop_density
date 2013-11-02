class CountriesController < ApplicationController

	def index
		@countries = Country.all
		# @country = Country.find(params[:country_id])
	end

	# def get_density
	# 	@country = Country.find(params[:index])
	# end
end

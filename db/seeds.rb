# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



require 'nokogiri'
require 'open-uri'

Country.delete_all

pop_data = Nokogiri::HTML(open("http://www.worldatlas.com/aatlas/populations/ctypopls.htm#.UnPycpTXRhQ"))
pop_data_name = pop_data.css('tbody tr td:nth-child(2)')
pop_data_density = pop_data.css('tbody tr td:nth-child(5)')
pop_array_name = []
pop_array_density = []
pop_array_name.push pop_data_name
pop_array_density.push pop_data_density



i = 0
while i < 192 do
		Country.create(name: pop_array_name[0][i].text, pop_density: pop_array_density[0][i].text.gsub(/,/, '').to_i)
	i += 1
end
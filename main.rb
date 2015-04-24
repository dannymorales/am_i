require "sinatra"
require "mandrill"

get '/' do
	erb :home
end


get '/' do
	erb :about
end


get '/' do
	erb :amiStudio
end


get '/' do
	erb :amiFilm
end


get '/' do
	erb :contact
end
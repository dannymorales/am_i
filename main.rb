require "sinatra"
require "mandrill"

get '/' do
	erb :index
end

get '/contact' do 
	erb :contact
end 
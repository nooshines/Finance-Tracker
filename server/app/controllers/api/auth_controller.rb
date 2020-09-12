class Api::AuthController < ApplicationController
  before_action :user_exists, except: :login

  def login
    user = User.find_by(name: params[:name])
    p user
    if user && user.authenticate(params[:password])
      token = encode_token id: user.id
      p token
      render json: { user: { id: user.id, name: user.name, token: token } }
    else
      render json: { message: 'user not found' } , status: 404
    end
  end

  #check if we are logged in !
  def status
    render json: { message: 'valid user'}, status: :accepted
  end

end
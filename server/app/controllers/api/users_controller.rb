
class Api::UsersController < ApplicationController
  before_action :user_exists, except: :create

  #get user
  def index
    user = User.find(@user_id)
    render json: {id: user.id, name: user.name}
  end

  #create
  def create
    user = User.create(user_params)
    render json: user
  end

  #update
  def update
    render json: User.find(@user_id).update(user_params)
  end

  #delete
  def destroy
    render json: User.destroy(@user_id)
  end

  private
  def user_params
    params.required(:user).permit(:name, :password)
  end

end
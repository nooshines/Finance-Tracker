class ApplicationController < ActionController::API
  before_action :user_exists

  def encode_token user_id
    exp = Time.now.to_i + 4 * 3600
    exp_payload = { id: user_id, exp: exp}

    JWT.encode(user_id, 'WindowCat')
  end

  def decode_token
    auth_token = request.headers['authorization'] # Authorization: 'Bearer TOKENHERE'
    if auth_token
      token = auth_token.split(' ') # split token string by space
      p token
      begin
        payload = JWT.decode(token[1], 'WindowCat')
        @user_id = payload[0]['id'] #store user id on class instance variable
      rescue StandardError
        nil
      end
    end
  end

  def user_exists
    render json: { message: 'please login!' }, status: 401 unless decode_token
  end
end


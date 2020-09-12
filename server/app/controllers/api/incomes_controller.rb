class Api::IncomesController <ApplicationController
  before_action :user_exists

  #get all
  def index
    render json: User.find(@user_id).incomes.all
  end

  #create
  def create
    income = User.find(@user_id).incomes.create(income_params)
    if income
      render json: income, status: 201
    else
      render json: { message: 'unable to create income' }, status: 422
    end
  end

  #get one
  def show
    render json: User.find(@user_id).incomes.find(params[:id])
  end

  #update
  def update
    income = User.find(@user_id).incomes.find(params[:id])
    income.update(income_params)
    render json: { message: 'updated', data: income }
  end

  #delete
  def destroy
    data = User.find(@user_id).incomes.destroy(params[:id])
    render json:  data
  end

  private
  def income_params
    params.required(:income).permit(:title, :amount)
  end
end

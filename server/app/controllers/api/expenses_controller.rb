class Api::ExpensesController <ApplicationController
  before_action :user_exists

  #get all
  def index
    render json: User.find(@user_id).expenses.all
  end

  #create
  def create
    expense = User.find(@user_id).expenses.create(expense_params)
    if expense
      render json: expense, status: 201
    else
      render json: { message: 'unable to create expense' }, status: 422
    end
  end

  #get one
  def show
    render json: User.find(@user_id).expenses.find(params[:id])
  end

  #update
  def update
    expense = User.find(@user_id).expenses.find(params[:id])
    expense.update(expense_params)
    render json: { message: 'updated', data: expense }
  end

  #delete
  def destroy
    data = User.find(@user_id).expenses.destroy(params[:id])
    render json:  data
  end

  private
  def expense_params
    params.required(:expense).permit(:title, :amount)
  end
end


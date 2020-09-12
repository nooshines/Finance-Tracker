class CreateIncomes < ActiveRecord::Migration[6.0]
  def change
    create_table :incomes do |t|
      t.string :title
      t.integer :amount
      t.integer :user_id
    end
  end
end

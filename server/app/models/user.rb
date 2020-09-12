class User < ApplicationRecord
  has_secure_password
  has_many :incomes
  has_many :expenses

  validates :name, uniqueness: { message: "already exist!" }
  validates :name, :password_digest, presence: true
end

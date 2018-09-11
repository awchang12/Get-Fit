class User < ApplicationRecord
    validates :username, uniqueness: true
    validates_presence_of :first_name, :last_name, :username, :startingWeight, :height, :age, :gender, :goalWeight, :caloricGoal
    has_secure_password

    has_many :logs
    has_many :goals
    has_many :user_foods
    has_many :foods, through: :user_foods
end

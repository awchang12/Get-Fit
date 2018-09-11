class UserSerializer < ActiveModel::Serializer
  has_many :logs
  has_many :goals
  has_many :user_foods
  has_many :foods, through: :user_foods
  
  attributes :id, :first_name, :last_name, :startingWeight, :goalWeight, :height, :age, :gender, :created_at
end

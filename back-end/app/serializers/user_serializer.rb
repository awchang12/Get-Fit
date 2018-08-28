class UserSerializer < ActiveModel::Serializer
  has_many :logs
  has_many :goals
  has_many :user_foods
  has_many :foods, through: :user_foods
  
  attributes :id, :first_name, :last_name, :weight, :height, :age, :gender
end

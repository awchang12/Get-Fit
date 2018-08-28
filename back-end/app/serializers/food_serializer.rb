class FoodSerializer < ActiveModel::Serializer
  has_many :user_foods
  has_many :users, through: :user_foods
  
  attributes :id, :name, :fats, :carbs, :protein
end

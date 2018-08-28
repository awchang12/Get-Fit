class LogSerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :date, :user_id, :weight
end

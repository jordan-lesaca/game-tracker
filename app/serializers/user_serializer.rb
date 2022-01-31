class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :competitive
  has_many :games, serializer: GameSerializer
end

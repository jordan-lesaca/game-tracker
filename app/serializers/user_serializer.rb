class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :competitive
  has_many :games, serializer: GameSerializer
end

  #specifies to user serializer that it should be using this serializer instead (passing it explicitly)
  #We use serializer: NameSerializer to specify what details of the database we want to render. 
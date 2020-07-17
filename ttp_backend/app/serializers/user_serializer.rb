class UserSerializer < ActiveModel::Serializer
  attributes :id, :transactions, :name, :email, :balance
end

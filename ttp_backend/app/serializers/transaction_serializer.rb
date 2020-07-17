class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :ticker_symbol, :share_quantity, :price_per
end

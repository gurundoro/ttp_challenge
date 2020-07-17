class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :ticker_symbol
      t.integer :share_quantity
      t.decimal :price_per, precision: 8, scale: 2
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class AddColumnToPlayer < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :score, :integer
  end
end

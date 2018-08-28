class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :fats
      t.integer :carbs
      t.integer :protein

      t.timestamps
    end
  end
end

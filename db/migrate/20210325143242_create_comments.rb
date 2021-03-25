class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :description
      t.date :commentDate
      t.string :usuario
      t.belongs_to :restaurant, index: true, foreign_key: true
      t.timestamps
    end
  end
end

class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures do |t|
      t.string :link
      t.belongs_to :restaurant, index: true, foreign_key: true
      t.timestamps
    end
  end
end

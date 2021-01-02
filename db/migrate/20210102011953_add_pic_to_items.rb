class AddPicToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :pic, :string
  end
end

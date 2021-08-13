class AddActiveColumnToFriendshipsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :friendships, :active, :boolean

    add_index :friendships, :active
  end
end

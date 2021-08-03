class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :post_id
      t.integer :user_id
      t.integer :picture_id

      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :post_id
    add_index :posts, :user_id
    add_index :posts, :picture_id
  end
end

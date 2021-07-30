class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string  :first_name,      null: false
      t.string  :last_name,       null: false
      t.string  :email,           null: false
      t.date    :birthday,        null: false
      t.string  :gender,          null: false
      t.string  :workplace
      t.string  :college
      t.string  :high_school
      t.string  :current_city
      t.string  :city
      t.string  :hometown
      t.string  :relationship_status
      t.integer :relationship_id
      t.string  :religious_views
      t.string  :language
      t.string  :address
      t.string  :phone_number
      t.string  :password_digest, null: false
      t.string  :session_token,   null: false

      t.timestamps
    end

    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :email,         unique: true
    add_index :users, :session_token, unique: true
  end
end

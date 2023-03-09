class CreateUsers < ActiveRecord::Migration[7.0]
  def up
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true

      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end

  def down
      drop_table :users
      remove_index :users, column: :username, if_exists: true
      remove_index :users, column: :email, if_exists: true
      remove_index :users, column: :session_token, if_exists: true
  end
end
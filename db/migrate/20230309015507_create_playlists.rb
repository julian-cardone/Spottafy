class CreatePlaylists < ActiveRecord::Migration[7.0]
  def up
    create_table :playlists do |t|
      t.string :playlist_name, null: false

      t.timestamps
    end
    add_index :playlists, :playlist_name
  end

  def down
    drop_table :playlists
    remove_index :playlists, column: :playlist_name, if_exists: true
  end
end

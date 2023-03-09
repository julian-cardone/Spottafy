class CreatePlaylistSongs < ActiveRecord::Migration[7.0]
  def up
    create_table :playlist_songs do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false

      t.timestamps
    end
    add_foreign_key :playlist_songs, :playlists, column: :playlist_id, primary_key: :id
    add_foreign_key :playlist_songs, :songs, column: :song_id, primary_key: :id
  end

  def down
    drop_table :playlist_songs
    remove_foreign_key :playlist_songs, column: :playlist_id, if_exists: true
    remove_foreign_key :playlist_songs, column: :song_id, if_exists: true
  end
end

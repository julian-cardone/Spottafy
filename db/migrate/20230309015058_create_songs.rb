class CreateSongs < ActiveRecord::Migration[7.0]
  def up
    create_table :songs do |t|
      t.integer :artist_id, null: false
      t.string :song_title, null: false
      t.integer :album_id

      t.timestamps
    end
    add_index :songs, :song_title
    add_foreign_key :songs, :artists, column: :artist_id, primary_key: :id
  end

  def down
    drop_table :songs
    remove_index :songs, column: :song_title, if_exists: true
    remove_foreign_key :songs, column: :artist_id, if_exists: true
  end
end

class CreateSongs < ActiveRecord::Migration[7.0]
  def create
    create_table :songs do |t|
      t.integer :artist_id, null: false
      t.string :song_title, null: false
      t.integer :album_id
      t.string :song_time

      t.timestamps
    end
    add_index :songs, :song_title
    add_foreign_key :songs, :artists, column: :artist_id, primary_key: :id
  end
end

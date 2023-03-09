class CreateAlbums < ActiveRecord::Migration[7.0]
  def up
    create_table :albums do |t|
      t.string :album_name, null: false
      t.integer :artist_id, null: false
      t.integer :year, null: false

      t.timestamps
    end
    add_index :albums, :album_name
    add_foreign_key :albums, :artists, column: :artist_id, primary_key: :id
  end

  def down
    drop_table :albums
    remove_index :albums, column: :album_name, if_exists: true
    remove_foreign_key :albums, column: :artist_id, if_exists: true
  end
end

class CreateAlbums < ActiveRecord::Migration[7.0]
  def create
    create_table :albums do |t|
      t.string :album_name, null: false
      t.integer :artist_id, null: false
      t.integer :year, null: false

      t.timestamps
    end
    add_index :albums, :album_name
    add_foreign_key :albums, :artists, column: :artist_id, primary_key: :id
  end
end

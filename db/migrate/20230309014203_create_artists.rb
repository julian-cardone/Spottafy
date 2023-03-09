class CreateArtists < ActiveRecord::Migration[7.0]
  def up
    create_table :artists do |t|
      t.string :artist_name, null: false

      t.timestamps
    end
    add_index :artists, :artist_name
  end

  def down
    drop_table :artists
    remove_index :artists, column: :artist_name, if_exists: true
  end
end

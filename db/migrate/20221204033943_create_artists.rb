class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :artist_name, null: false

      t.timestamps
    end
    add_index :artists, :artist_name
  end
end

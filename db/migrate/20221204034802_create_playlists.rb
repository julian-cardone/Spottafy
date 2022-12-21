class CreatePlaylists < ActiveRecord::Migration[7.0]
  def create
    create_table :playlists do |t|
      t.string :playlist_name, null: false

      t.timestamps
    end
    add_index :playlists, :playlist_name
  end
end

class AddSongTimes < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :song_time, :string
  end
end

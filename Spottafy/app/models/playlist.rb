# == Schema Information
#
# Table name: playlists
#
#  id            :bigint           not null, primary key
#  playlist_name :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Playlist < ApplicationRecord
end

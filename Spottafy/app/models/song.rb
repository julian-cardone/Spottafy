# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  artist_id  :integer          not null
#  song_title :string           not null
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
end

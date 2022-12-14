# == Schema Information
#
# Table name: artists
#
#  id          :bigint           not null, primary key
#  artist_name :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Artist < ApplicationRecord

    has_many :albums, dependent: :destroy

    has_many :songs, dependent: :destroy

end

# class_name: :artist,
# dependent: :destroy,
# inverse_of: :artist
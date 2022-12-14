# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  album_name :string           not null
#  artist_id  :integer          not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord

    validates :album_name, presence: true
    validates :artist_id, presence: true
    validates :year, presence: true

    has_one_attached :photo

    belongs_to :artist

end

# primary_key: :id,
# foreign_key: :artist_id,
# class_name: :artist,
# dependent: :destroy,
# inverse_of: :albums
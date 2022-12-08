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

    has_one_attached :photo

end

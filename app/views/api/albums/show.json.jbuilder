json.set! "album" do
    json.extract! @album, :id, :album_name, :artist_id, :year
    json.photoUrl @album.photo.url
end

json.set! "songs" do
    @songs.each_with_index do |song, i|
        json.set! i+1 do
            json.extract! song, :id, :artist_id, :song_title, :album_id
            json.songUrl song.song.url
        end
    end
end

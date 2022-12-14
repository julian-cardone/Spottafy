json.set! "album" do
    json.extract! @album, :id, :album_name, :artist_id, :year
end

json.set! "songs" do
    @songs.each_with_index do |song, i|
        json.set! i+1 do
            json.extract! song, :id, :artist_id, :song_title, :album_id
        end
    end
end

json.extract! bench, 
  :id, 
  :album_name,
  :artist_id, 
  :year
  
if album.photo.attached?
  json.photo_url url_for(album.photo) 
else
  json.photo_url "/album_placeholder.png"
end
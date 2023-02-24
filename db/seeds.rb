# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Album.destroy_all
    Song.destroy_all
    Artist.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    %w(albums songs artists users).each do |table_name|
      ApplicationRecord.connection.reset_pk_sequence!(table_name)
    end
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    users = 10.times.map do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating Artists..."

    Artist.create!(
      id: 1,
      artist_name: "The Who"
    )

    Artist.create!(
      id: 2,
      artist_name: "Metro Boomin"
    )

    Artist.create!(
      id: 3,
      artist_name: "Electric Light Orchestra"
    )

    Artist.create!(
      id: 4,
      artist_name: "Arctic Monkeys"
    )

    Artist.create!(
      id: 5,
      artist_name: "Mariah Carey"
    )

    puts "Creating albums..."

    album1 = Album.create(
      id: 1,
      album_name: 'Quadrophenia',
      artist_id: 1,
      year: 1973
    )

    album1.photo.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/quadrophenia.jpg"), 
    filename: "quadrophenia.jpg")

    # Album.create!(
    #   id: 1,
    #   album_name: 'Quadrophenia',
    #   artist_id: 1,
    #   year: 1973
    # )

    album2 = Album.create(
      id: 2,
      album_name: 'HEROES & VILLAINS',
      artist_id: 2,
      year: 2022
    )

    album2.photo.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/heroes%26villains.webp"),filename: "heroes%26villains.webp")

    album3 = Album.create(
      id: 3,
      album_name: 'All Over the World',
      artist_id: 3,
      year: 1980
    )

    album3.photo.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/allovertheworld.jpg"),filename: "allovertheworld.jpg")

    album4 = Album.create(
      id: 4,
      album_name: 'AM',
      artist_id: 4,
      year: 2013
    )

    album4.photo.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/am.jpg"),filename: "am.jpg")

    album5 = Album.create(
      id: 5,
      album_name: 'Merry Christmas',
      artist_id: 5,
      year: 1994
    )

    album5.photo.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/Merry_Christmas_Mariah_Carey.png"),filename: "Merry_Christmas_Mariah_Carey.png")

    puts "Creating Songs..."

    song1 = Song.create(
      id: 1,
      artist_id: 1,
      song_title: "Cut My Hair",
      album_id: 1,
      song_time: "3:45"
    )

    song1.song.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/The+Who+-+Cut+My+Hair.mp3"),filename: "The+Who+-+Cut+My+Hair.mp3")

    song2 = Song.create(
      id: 13,
      artist_id: 5,
      song_title: "All I Want For Christmas is You",
      album_id: 5,
      song_time: "3:55"
    )

    song2.song.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/Mariah+Carey+-+All+I+Want+For+Christmas+Is+You+(Official+Video).mp3"),filename: "Mariah+Carey+-+All+I+Want+For+Christmas+Is+You+(Official+Video).mp3")

    Song.create!(
      id: 2,
      artist_id: 1,
      song_title: "Sea and Sand",
      album_id: 1,
      song_time: "5:01"
    ).song.attach(io: URI.open("https://spottafy-seeds.s3.amazonaws.com/The+Who+-+Sea+And+Sand.mp3"),filename: "The+Who+-+Sea+And+Sand.mp3")

    Song.create!(
      id: 3,
      artist_id: 1,
      song_title: "Love, Reign O'er Me",
      album_id: 1
    )

    Song.create!(
      id: 4,
      artist_id: 2,
      song_title: "Superhero",
      album_id: 2
    )

    Song.create!(
      id: 5,
      artist_id: 2,
      song_title: "Raindrops (insane)",
      album_id: 2
    )

    Song.create!(
      id: 6,
      artist_id: 2,
      song_title: "Metro Spider",
      album_id: 2
    )

    Song.create!(
      id: 7,
      artist_id: 3,
      song_title: "Mr. Blue Sky",
      album_id: 3
    )

    Song.create!(
      id: 8,
      artist_id: 3,
      song_title: "Turn to Stone",
      album_id: 3
    )

    Song.create!(
      id: 9,
      artist_id: 3,
      song_title: "Strange Magic",
      album_id: 3
    )

    Song.create!(
      id: 10,
      artist_id: 4,
      song_title: "Why'd You Only Call Me When You're High",
      album_id: 4
    )

    Song.create!(
      id: 11,
      artist_id: 4,
      song_title: "Arabella",
      album_id: 4
    )

    Song.create!(
      id: 12,
      artist_id: 4,
      song_title: "Do I Wanna Know?",
      album_id: 4
    )

    # Song.create!(
    #   id: 14,
    #   artist_id: 5,
    #   song_title: "How To Talk",
    #   album_id: 5
    # )

    # Song.create!(
    #   id: 15,
    #   artist_id: 5,
    #   song_title: "Dark Queen",
    #   album_id: 5
    # )

    Song.create!(
      id: 16,
      artist_id: 1,
      song_title: "Quadrophenia",
      album_id: 1
    )

    Song.create!(
      id: 17,
      artist_id: 1,
      song_title: "The Punk and the Godfather",
      album_id: 1
    )

    Song.create!(
      id: 18,
      artist_id: 1,
      song_title: "Is It In My Head?",
      album_id: 1
    )
    
    puts "Seeding complete!"
    
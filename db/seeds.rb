# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    %w(users benches reviews).each do |table_name|
      ApplicationRecord.connection.reset_pk_sequence!(table_name)
    end
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
      artist_name: "Lil Uzi Vert"
    )

    puts "Creating albums..."

    Album.create!(
      id: 1,
      album_name: 'Quadrophenia',
      artist_id: 1,
      year: 1973
    )

    Album.create!(
      id: 2,
      album_name: 'HEROES & VILLAINS',
      artist_id: 2,
      year: 2022
    )

    Album.create!(
      id: 3,
      album_name: 'All Over the World',
      artist_id: 3,
      year: 1980
    )

    Album.create!(
      id: 4,
      album_name: 'AM',
      artist_id: 4,
      year: 2013
    )

    Album.create!(
      id: 5,
      album_name: 'Luv is Rage 2',
      artist_id: 5,
      year: 2017
    )

    puts "Creating Songs..."

    Song.create!(
      id: 1,
      artist_id: 1,
      song_title: "Cut My Hair",
      album_id: 1
    )

    Song.create!(
      id: 2,
      artist_id: 1,
      song_title: "Sea and Sand",
      album_id: 1
    )

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

    Song.create!(
      id: 13,
      artist_id: 5,
      song_title: "20 Min",
      album_id: 5
    )

    Song.create!(
      id: 14,
      artist_id: 5,
      song_title: "How To Talk",
      album_id: 5
    )

    Song.create!(
      id: 15,
      artist_id: 5,
      song_title: "Dark Queen",
      album_id: 5
    )
    
    puts "Seeding complete!"
    
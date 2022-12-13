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

    Album.create!(
      album_name: 'Quadropehnia',
      artist_id: 1,
      year: 1973
    )

    Album.create!(
      album_name: 'HEROES & VILLAINS',
      artist_id: 2,
      year: 2022
    )

    Album.create!(
      album_name: 'All Over the World',
      artist_id: 3,
      year: 1980
    )

    Album.create!(
      album_name: 'AM',
      artist_id: 4,
      year: 2013
    )

    Album.create!(
      album_name: 'Luv is Rage 2',
      artist_id: 5,
      year: 2017
    )

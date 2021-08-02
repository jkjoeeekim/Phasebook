# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({first_name: 'Joe', last_name: 'Kim', password:'111111', email: '11', birthday: '2010/10/10', gender: "male"})
user2 = User.create({first_name: 'Bill', last_name: 'Kim', password:'111111', email: '12', birthday: '2010/10/10', gender: "male"})
user3 = User.create({first_name: 'Bob', last_name: 'Kim', password:'111111', email: '13', birthday: '2010/10/10', gender: "male"})
user4 = User.create({first_name: 'Paul', last_name: 'Kim', password:'111111', email: '14', birthday: '2010/10/10', gender: "male"})
user5 = User.create({first_name: 'James', last_name: 'Kim', password:'111111', email: '15', birthday: '2010/10/10', gender: "male"})


fship1 = Friendship.create({user_id: 1, friend_id: 2})
fship2 = Friendship.create({user_id: 1, friend_id: 3})
fship3 = Friendship.create({user_id: 1, friend_id: 4})
fship4 = Friendship.create({user_id: 1, friend_id: 5})
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Friendship.destroy_all
User.destroy_all

user1 = User.create({first_name: 'Joe', last_name: 'Kim', password:'111111', email: 'Joe@Kim.com', birthday: '1990/10/10', gender: "male"})
user2 = User.create({first_name: 'Bill', last_name: 'Lee', password:'111111', email: 'Bill@Lee.com', birthday: '2000/01/01', gender: "male"})
user3 = User.create({first_name: 'Bobby', last_name: 'Bob', password:'111111', email: 'Bobby@Bob.com', birthday: '2005/07/25', gender: "male"})
user4 = User.create({first_name: 'Paul', last_name: 'Conner', password:'111111', email: 'Paul@Conner.com', birthday: '1995/12/06', gender: "male"})
user5 = User.create({first_name: 'James', last_name: 'Chang', password:'111111', email: 'James@Chang.com', birthday: '2010/03/13', gender: "male"})
user6 = User.create({first_name: 'Jenni', last_name: 'Widjaja', password:'111111', email: 'Joe@Kim.com', birthday: '1990/10/10', gender: "female"})
user7 = User.create({first_name: 'Valerie', last_name: 'Fu', password:'111111', email: 'Bill@Kim.com', birthday: '2000/01/01', gender: "female"})
user8 = User.create({first_name: 'Annie', last_name: 'Burns', password:'111111', email: 'Bob@Kim.com', birthday: '2005/07/25', gender: "female"})
user9 = User.create({first_name: 'Candice', last_name: 'Tran', password:'111111', email: 'Paul@Kim.com', birthday: '1995/12/06', gender: "female"})
user10 = User.create({first_name: 'Christy', last_name: 'Won', password:'111111', email: 'James@Kim.com', birthday: '2010/03/13', gender: "female"})

fship1 = Friendship.create({user_id: 1, friend_id: 3})
fship2 = Friendship.create({user_id: 1, friend_id: 5})
fship3 = Friendship.create({user_id: 1, friend_id: 7})
fship4 = Friendship.create({user_id: 1, friend_id: 9})

# post1 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 1,
#   user_id: 1
# })
# post2 = Post.create({
#   body: "Anyone have recommendations for pasta restaurants?",
#   author_id: 2
# },)
# post3 = Post.create({
#   body: "Happy Birthday Joe!",
#   author_id: 3,
#   user_id: 1
# })
# post4 = Post.create({
#   body: "Happy Birthday~~",
#   author_id: 4,
#   user_id: 1
# })
# post5 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post6 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post7 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post8 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post9 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post10 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post11 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post12 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post13 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post14 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post15 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post16 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post17 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post18 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post19 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
# post20 = Post.create({
#   body: "Picture of my vacation!",
#   picture_id: 5,
#   author_id: 20
# })
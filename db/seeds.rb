# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Friendship.destroy_all
Post.destroy_all
User.destroy_all

user1 = User.create({first_name: 'Joe', last_name: 'Kim', password:'111111', email: 'joe@kim.com', birthday: '1990/10/10', gender: "male"})
user2 = User.create({first_name: 'Bill', last_name: 'Lee', password:'111111', email: 'bill@lee.com', birthday: '2000/01/01', gender: "male"})
user3 = User.create({first_name: 'Bobby', last_name: 'Bob', password:'111111', email: 'bobby@bob.com', birthday: '2005/07/25', gender: "male"})
user4 = User.create({first_name: 'Paul', last_name: 'Conner', password:'111111', email: 'paul@conner.com', birthday: '1995/12/06', gender: "male"})
user5 = User.create({first_name: 'James', last_name: 'Chang', password:'111111', email: 'james@chang.com', birthday: '2010/03/13', gender: "male"})
user6 = User.create({first_name: 'Jenni', last_name: 'Widjaja', password:'111111', email: 'jenny@widjaja.com', birthday: '1990/10/10', gender: "female"})
user7 = User.create({first_name: 'Valerie', last_name: 'Fu', password:'111111', email: 'valerie@fu.com', birthday: '2000/01/01', gender: "female"})
user8 = User.create({first_name: 'Annie', last_name: 'Burns', password:'111111', email: 'anne@burns.com', birthday: '2005/07/25', gender: "female"})
user9 = User.create({first_name: 'Candice', last_name: 'Tran', password:'111111', email: 'candice@tran.com', birthday: '1995/12/06', gender: "female"})
user10 = User.create({first_name: 'Christy', last_name: 'Won', password:'111111', email: 'christy@won.com', birthday: '2010/03/13', gender: "female"})

fship1 = Friendship.create({user_id: user1.id, friend_id: user3.id})
fship2 = Friendship.create({user_id: user1.id, friend_id: user5.id})
fship3 = Friendship.create({user_id: user1.id, friend_id: user7.id})
fship4 = Friendship.create({user_id: user1.id, friend_id: user9.id})

post1 = Post.create({
  body: "Picture of my vacation!",
  author_id: user1.id
})

post2 = Post.create({
  body: "Anyone have recommendations for pasta restaurants?",
  author_id: user2.id
});

post3 = Post.create({
  body: "Went golfing today, the weather was so hot!",
  author_id: user3.id
})

post4 = Post.create({
  body: "Happy Birthday~~",
  author_id: user4.id
})

post5 = Post.create({
  body: "Who watched the Olympics last night?? GO U.S.A.!!",
  author_id: user5.id
})

post6 = Post.create({
  body: "Check out this chill lofi stream! https://www.youtube.com/watch?v=5qap5aO4i9A",
  author_id: user6.id
})

post7 = Post.create({
  body: "Just made my account, how do I add a profile picture?",
  author_id: user7.id
})

post8 = Post.create({
  body: "Who saw the shooting stars last night?? It was soo amazing!",
  author_id: user8.id
})

post9 = Post.create({
  body: "20 day streak of going to the gym!",
  author_id: user9.id
})

post10 = Post.create({
  body: "Should I get a Tesla or a Mercedes",
  author_id: user10.id
})

# post11 = Post.create({
#   body: "Picture of my vacation!",
#   author_id: 20
# })
# post12 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post13 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post14 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post15 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post16 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post17 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post18 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post19 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
# post20 = Post.create({
#   body: "Picture of my vacation!"
#   author_id: 20
# })
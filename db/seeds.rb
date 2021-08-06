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

user1 = User.create({
  first_name: 'Joe', 
  last_name: 'Kim', 
  password:'111111', 
  email: 'joe@kim.com', 
  birthday: '1990/10/10', 
  gender: "male",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GEKCtVI58zQtIaRgjKsJzsNQJfOmi-1cmw&usqp=CAU"
})

user2 = User.create({
  first_name: 'Bill', 
  last_name: 'Lee James', 
  password:'111111', 
  email: 'bill@lee.com', 
  birthday: '2000/01/01', 
  gender: "male",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&usqp=CAU"
})

user3 = User.create({
  first_name: 'Bobby', 
  last_name: 'Bob', 
  password:'111111', 
  email: 'bobby@bob.com', 
  birthday: '2005/07/25', 
  gender: "male",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZXWjdUZ9HIKIgvcphDnXW4_NOBPzVd72ZQ&usqp=CAU"
})

user4 = User.create({
  first_name: 'Paul', 
  last_name: 'Conner', 
  password:'111111', 
  email: 'paul@conner.com', 
  birthday: '1995/12/06', 
  gender: "male",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kC9oPUHSmaSUc7KEGsBhoX3ABtUZMpQbUw&usqp=CAU"
})

user5 = User.create({
  first_name: 'James', 
  last_name: 'Chang', 
  password:'111111', 
  email: 'james@chang.com', 
  birthday: '2010/03/13', 
  gender: "male",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvMCto4GWw62xLwDYOC1cWWNpLM-cao46VA&usqp=CAU",
})
user6 = User.create({
  first_name: 'Jenni', 
  last_name: 'Widjaja', 
  password:'111111', 
  email: 'jenny@widjaja.com', 
  birthday: '1990/10/10', 
  gender: "female",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugb_Bwq4G4QY6V11WR8dMyDTJnX6JbleZ1A&usqp=CAU",
})

user7 = User.create({
  first_name: 'Valerie', 
  last_name: 'Fu', 
  password:'111111', 
  email: 'valerie@fu.com', 
  birthday: '2000/01/01', 
  gender: "female",
  picture_url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
})

user8 = User.create({
  first_name: 'Annie', 
  last_name: 'Burns', 
  password:'111111', 
  email: 'anne@burns.com', 
  birthday: '2005/07/25', 
  gender: "female",
  picture_url: "data:image/jpeg;base64,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"
})

user9 = User.create({
  first_name: 'Candice', 
  last_name: 'Tran', 
  password:'111111', 
  email: 'candice@tran.com', 
  birthday: '1995/12/06', 
  gender: "female",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjFNSBoaeCY3Lag_QQRoMIYFL1FiADumMZA&usqp=CAU",
})

user10 = User.create({
  first_name: 'Christy', 
  last_name: 'Won', 
  password:'111111', 
  email: 'christy@won.com', 
  birthday: '2010/03/13', 
  gender: "female",
  picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S6OC1WCwNMMxOhBMXDvyY-81d8noNDKjSw&usqp=CAU",
})

# user1 friendships
fship1 = Friendship.create({user_id: user1.id, friend_id: user3.id})
fship2 = Friendship.create({user_id: user1.id, friend_id: user5.id})
fship3 = Friendship.create({user_id: user1.id, friend_id: user7.id})
fship4 = Friendship.create({user_id: user1.id, friend_id: user9.id})

# user2 friendships
fship17 = Friendship.create({user_id: user2.id, friend_id: user3.id})
fship9 = Friendship.create({user_id: user2.id, friend_id: user4.id})
fship10 = Friendship.create({user_id: user2.id, friend_id: user6.id})
fship11 = Friendship.create({user_id: user2.id, friend_id: user8.id})
fship12 = Friendship.create({user_id: user2.id, friend_id: user10.id})

# user3 friendships
fship5 = Friendship.create({user_id: user3.id, friend_id: user1.id})
fship18 = Friendship.create({user_id: user3.id, friend_id: user2.id})
fship19 = Friendship.create({user_id: user3.id, friend_id: user4.id})
fship20 = Friendship.create({user_id: user3.id, friend_id: user5.id})
fship21 = Friendship.create({user_id: user3.id, friend_id: user6.id})
fship22 = Friendship.create({user_id: user3.id, friend_id: user7.id})
fship23 = Friendship.create({user_id: user3.id, friend_id: user8.id})
fship24 = Friendship.create({user_id: user3.id, friend_id: user9.id})
fship25 = Friendship.create({user_id: user3.id, friend_id: user10.id})

# user4 friendships
fship13 = Friendship.create({user_id: user4.id, friend_id: user2.id})
fship26 = Friendship.create({user_id: user4.id, friend_id: user3.id})

# user5 friendships
fship6 = Friendship.create({user_id: user5.id, friend_id: user1.id})
fship27 = Friendship.create({user_id: user5.id, friend_id: user3.id})

# user6 friendships
fship14 = Friendship.create({user_id: user6.id, friend_id: user2.id})
fship28 = Friendship.create({user_id: user6.id, friend_id: user3.id})

# user7 friendships
fship7 = Friendship.create({user_id: user7.id, friend_id: user1.id})
fship29 = Friendship.create({user_id: user7.id, friend_id: user3.id})

# user8 friendships
fship15 = Friendship.create({user_id: user8.id, friend_id: user2.id})
fship30 = Friendship.create({user_id: user8.id, friend_id: user3.id})

# user9 friendships
fship8 = Friendship.create({user_id: user9.id, friend_id: user1.id})
fship31 = Friendship.create({user_id: user9.id, friend_id: user3.id})

# user10 friendships
fship16 = Friendship.create({user_id: user10.id, friend_id: user2.id})
fship32 = Friendship.create({user_id: user10.id, friend_id: user3.id})

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
  author_id: user4.id,
})

post5 = Post.create({
  body: "Who watched the Olympics last night?? GO KOREA!!",
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

post11 = Post.create({
  body: "Hi there, welcome to Fazebook~! 😃🎉🎉",
  author_id: user3.id
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
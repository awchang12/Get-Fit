# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


anthony = User.create(first_name: "Anthony", last_name: "Chang", username: "awchang", startingWeight: 210, goalWeight: 185, height: 70, age: 26, gender: "male", password: "pw")
jeff = User.create(first_name: "Jeff", last_name: "Johnson", username: "jj", startingWeight: 160, goalWeight: 175, height: 68, age: 35, gender: "male", password: "pw")

alog1 = Log.create(date: "2018-8-31", weight: 208, user_id: 1)
agoal1 = Goal.create(content: "This week I want to go to the gym 3 times", user_id: 1)
agoal2 = Goal.create(content: "Go on 4 hikes this week!", user_id: 1)
agoal3 = Goal.create(content: "Don't have a cheat meal this week.", user_id: 1)
jgoal1= Goal.create(content: "I want to limit myself to 1 fast food meal this week", user_id: 2)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


anthony = User.create(first_name: "Anthony", last_name: "Chang", weight: 210, height: 70, age: 26, gender: "male")
jeff = User.create(first_name: "Jeff", last_name: "Johnson", weight: 160, height: 68, age: 35, gender: "male")

alog1 = Log.create(date: "8/31/2018", weight: 208, user_id: 1)
agoal1 = Goal.create(content: "This week I want to go to the gym 3 times", user_id: 1)
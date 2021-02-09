# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

players = ["Alice", "Bob", "Charlie"]

players.each do |player|
    Player.create(name: player)
end

questions = [
  {
    leftOption: "Gryffindor",
    rightOption: "Slytherin",
    correctOption: "Gryffindor",
    numCorrect: 1,
    numIncorrect: 0
  }, {
    leftOption: "Oven",
    rightOption: "Microwave",
    correctOption: "Oven",
    numCorrect: 1,
    numIncorrect: 0
  }, {
    leftOption: "Bread",
    rightOption: "Cake",
    correctOption: "Cake",
    numCorrect: 0,
    numIncorrect: 1
  }
]

questions.each do |question|
  Question.create(
    leftOption: question[:leftOption],
    rightOption: question[:rightOption],
    correctOption: question[:correctOption],
    numCorrect: question[:numCorrect],
    numIncorrect: question[:numIncorrect]
  )
end 

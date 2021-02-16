# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

players = [
  {
    name: "Alice",
    score: 30
  },
  {
    name: "Bob",
    score: 50
  },
  {
    name: "Charlie",
    score: 70
  }
]

players.each do |player|
    Player.create(
      name: player[:name],
      score: player[:score]
    )
end

questions = [
  {
    leftOption: "Gryffindor",
    rightOption: "Slytherin",
    correctOption: "Gryffindor",
    numCorrect: 36,
    numIncorrect: 64
  }, {
    leftOption: "Oven",
    rightOption: "Microwave",
    correctOption: "Oven",
    numCorrect: 75,
    numIncorrect: 25
  }, {
    leftOption: "Bread",
    rightOption: "Cake",
    correctOption: "Cake",
    numCorrect: 44,
    numIncorrect: 56
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

comments = [
  {
    content: "Slytherin, really??",
    player_id: 1
  },
  {
    content: "Didn't know you are a cake person.",
    player_id: 3
  }
]

comments.each do |comment|
  Player.find(comment[:player_id]).comments.create(
    content: comment[:content]
  )
end

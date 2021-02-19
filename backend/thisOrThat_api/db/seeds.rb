# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

players = [
  {
    name: "Albus",
    score: 30
  },
  {
    name: "Ron",
    score: 50
  },
  {
    name: "Dobby",
    score: 70
  },
  {
    name: "Sirius",
    score: 10
  },
  {
    name: "Hagrid",
    score: 20,
  },
  {
    name: "Hermione",
    score: 30
  },
  {
    name: "Neville",
    score: 40
  },
  {
    name: "The Fat Lady",
    score: 50
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
    leftOption: "Muggle",
    rightOption: "Squib",
    correctOption: "Squib",
    numCorrect: 44,
    numIncorrect: 56
  }, {
    leftOption: "Potions",
    rightOption: "Divination",
    correctOption: "Potions",
    numCorrect: 53,
    numIncorrect: 37
  }, {
    leftOption: "Invisibility Cloak",
    rightOption: "Time Turner",
    correctOption: "Invisibility Cloak",
    numCorrect: 65,
    numIncorrect: 35
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
  }, {
    leftOption: "Tea",
    rightOption: "Coffee",
    correctOption: "Tea",
    numCorrect: 49,
    numIncorrect: 51
  }, {
    leftOption: "Meat",
    rightOption: "Veggies",
    correctOption: "Veggies",
    numCorrect: 44,
    numIncorrect: 56
  }, {
    leftOption: "Snacks",
    rightOption: "Meals",
    correctOption: "Snacks",
    numCorrect: 64,
    numIncorrect: 36
  }, {
    leftOption: "Flower",
    rightOption: "Foliage",
    correctOption: "Foliage",
    numCorrect: 76,
    numIncorrect: 24
  }, {
    leftOption: "Spring",
    rightOption: "Fall",
    correctOption: "Fall",
    numCorrect: 40,
    numIncorrect: 60
  }, {
    leftOption: "Beach",
    rightOption: "Cabin",
    correctOption: "Beach",
    numCorrect: 48,
    numIncorrect: 52
  }, {
    leftOption: "Apartment",
    rightOption: "Townhouse",
    correctOption: "Apartment",
    numCorrect: 50,
    numIncorrect: 50
  }, {
    leftOption: "Routine",
    rightOption: "Whim",
    correctOption: "Routine",
    numCorrect: 45,
    numIncorrect: 55
  }, {
    leftOption: "Plan it",
    rightOption: "Wing it",
    correctOption: "Plan it",
    numCorrect: 28,
    numIncorrect: 72
  }, {
    leftOption: "Country",
    rightOption: "City",
    correctOption: "City",
    numCorrect: 87,
    numIncorrect: 13
  }, {
    leftOption: "Fast",
    rightOption: "Slow",
    correctOption: "Slow",
    numCorrect: 69,
    numIncorrect: 31
  }, {
    leftOption: "Intentions",
    rightOption: "Consequences",
    correctOption: "Intentions",
    numCorrect: 44,
    numIncorrect: 56
  }, {
    leftOption: "Present",
    rightOption: "Future",
    correctOption: "Future",
    numCorrect: 84,
    numIncorrect: 16
  }, {
    leftOption: "Experience",
    rightOption: "Result",
    correctOption: "Experience",
    numCorrect: 24,
    numIncorrect: 76
  }, {
    leftOption: "Rich",
    rightOption: "Talented",
    correctOption: "Talented",
    numCorrect: 77,
    numIncorrect: 23
  }, {
    leftOption: "Color",
    rightOption: "Monochrome",
    correctOption: "Color",
    numCorrect: 90,
    numIncorrect: 10
  }, {
    leftOption: "Maximalist",
    rightOption: "Minimalist",
    correctOption: "Minimalist",
    numCorrect: 60,
    numIncorrect: 40
  }, {
    leftOption: "Roller Coaster",
    rightOption: "Ferris Wheel",
    correctOption: "Roller Coaster",
    numCorrect: 44,
    numIncorrect: 56
  }, {
    leftOption: "Single Player",
    rightOption: "Multiplayer",
    correctOption: "Single Player",
    numCorrect: 50,
    numIncorrect: 50
  }, {
    leftOption: "Human",
    rightOption: "Robot",
    correctOption: "Robot",
    numCorrect: 54,
    numIncorrect: 46
  }, {
    leftOption: "Bitcoin",
    rightOption: "Ethereum",
    correctOption: "Ethereum",
    numCorrect: 40,
    numIncorrect: 60
  }, {
    leftOption: "Trade",
    rightOption: "Hold",
    correctOption: "Hold",
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
    content: "The truth… It is a beautiful and terrible thing, and should therefore be treated with great caution.",
    player_id: 1
  },
  {
    content: "Can you believe our luck?",
    player_id: 2
  },
  {
    content: "Bad Dobby! Bad Dobby!",
    player_id: 3
  },
  {
    content: "This is how it is.",
    player_id: 4
  },
  {
    content: "I Should NOT have said that.",
    player_id: 5
  },
  {
    content: "Bad Dobby! Bad Dobby!",
    player_id: 6
  },
  {
    content: "Why is it always me??",
    player_id: 7
  },
  {
    content: "Password?",
    player_id: 8
  }
]

comments.each do |comment|
  Player.find(comment[:player_id]).comments.create(
    content: comment[:content]
  )
end

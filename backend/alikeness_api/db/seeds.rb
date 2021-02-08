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

Question.create(leftOption: "Gryffindor", rightOption: "Slytherin", numCorrect: 1, numIncorrect: 0);
Question.create(leftOption: "oven", rightOption: "microwave", numCorrect: 1, numIncorrect: 0);
Question.create(leftOption: "bread", rightOption: "cake", numCorrect: 0, numIncorrect: 1);

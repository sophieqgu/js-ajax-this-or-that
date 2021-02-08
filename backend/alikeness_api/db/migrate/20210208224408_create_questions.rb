class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :leftOption
      t.string :rightOption
      t.integer :numCorrect
      t.integer :numIncorrect

      t.timestamps
    end
  end
end

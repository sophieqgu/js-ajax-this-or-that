class Player < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }

  has_many :comments
end

class List < ApplicationRecord
  validates :name, uniqueness: true
  has_many :bookmarks, through: :movie
end

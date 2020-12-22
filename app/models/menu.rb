class Menu < ApplicationRecord
  has_many :items 

  validates :title, presence: true
end

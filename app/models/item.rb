class Item < ApplicationRecord
  belongs_to :menu

  validates :item_name, :price, presence: true
  validates :price, numericality: true 
end

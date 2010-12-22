class Map < ActiveRecord::Base
  validates_uniqueness_of :title
  has_many :items, :dependent => :destroy, :order => "created_at asc"
end

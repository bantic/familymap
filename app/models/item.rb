class Item < ActiveRecord::Base
  belongs_to :map
  belongs_to :upload, :dependent => :destroy
  validates_presence_of :map
end

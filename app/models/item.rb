class Item < ActiveRecord::Base
  belongs_to :map
  validates_presence_of :map
  
  has_attached_file :image, 
                    :style          => { :medium => "300x300>", :thumb => "100x100>", :large => "500x500>" },
                    :storage        => :s3,
                    :s3_credentials => Rails.root.join("config","s3.yml"),
                    :path           => "/:map_id/:id/:style"
end

class CreateUploads < ActiveRecord::Migration
  def self.up
    create_table :uploads do |t|
      t.belongs_to :map
      
      t.string :image_file_name
      t.string :image_content_type
      t.integer :image_file_size
      t.datetime :image_updated_at
      
      t.decimal :latitude, :precision => 9, :scale => 6
      t.decimal :longitude, :precision => 9, :scale => 6
      
      t.timestamps
    end
  end

  def self.down
    drop_table :uploads
  end
end

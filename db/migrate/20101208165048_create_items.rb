class CreateItems < ActiveRecord::Migration
  def self.up
    create_table :items do |t|
      t.belongs_to :map
      t.belongs_to :upload
      t.string :title
      t.text :description
      
      t.timestamps
    end
  end

  def self.down
    drop_table :items
  end
end

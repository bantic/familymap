# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20101208201523) do

  create_table "items", :force => true do |t|
    t.integer  "map_id"
    t.integer  "upload_id"
    t.string   "title"
    t.text     "description"
    t.decimal  "latitude",    :precision => 9, :scale => 6
    t.decimal  "longitude",   :precision => 9, :scale => 6
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "maps", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "uploads", :force => true do |t|
    t.integer  "map_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.decimal  "latitude",           :precision => 9, :scale => 6
    t.decimal  "longitude",          :precision => 9, :scale => 6
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
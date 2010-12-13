class Upload < ActiveRecord::Base
  belongs_to :map
  validates_presence_of :map
  validates_presence_of :image
  has_one :item
  
  has_attached_file :image, 
                    :styles         => { :medium => "300x300>", :thumb => "100x100>", :large => "500x500>" },
                    :storage        => :s3,
                    :s3_credentials => {
                      :access_key_id     => S3[:key],
                      :secret_access_key => S3[:secret]
                    },
                    :bucket => S3[:bucket],
                    :path           => "/:map_id/:id/:style.:extension"
  
  
  
  def image_thumbnail_url
    image.url(:thumb)
  end
  
  def self.extract_exif_data(file)
    if file.content_type =~ /jpe?g/i
      exif_obj = EXIFR::JPEG.new(file)
      if exif_obj.exif?
        exif = exif_obj.exif
        if exif[:gps_latitude] && exif[:gps_longitude]
          latitude  = exif[:gps_latitude][0].to_f  + exif[:gps_latitude][1].to_f/60  + exif[:gps_latitude][2].to_f/3600
          longitude = exif[:gps_longitude][0].to_f + exif[:gps_longitude][1].to_f/60 + exif[:gps_longitude][2].to_f/3600
          
          latitude  *= -1 if exif[:gps_latitude_ref] =~ /s/i
          longitude *= -1 if exif[:gps_longitude_ref] =~ /w/i
          
          return {:exif_latitude => latitude, :exif_longitude => longitude}
        end
      end
    end
    
    {}
  end
end

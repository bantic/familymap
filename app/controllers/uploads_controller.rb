class UploadsController < ApplicationController
  before_filter :require_map

  def create
    exif_loc_data = Upload.extract_exif_data(params[:upload][:image].tempfile)
    
    @upload = Upload.new(params[:upload].merge(:map => @map).merge(exif_loc_data))
    respond_to do |format|
      if @upload.save
        format.js
      else
        # help
      end
    end
  end
end

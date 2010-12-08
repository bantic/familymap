class UploadsController < ApplicationController
  before_filter :require_map

  def create
    @upload = Upload.new(params[:upload].merge(:map => @map))
    respond_to do |format|
      if @upload.save
        format.js
      else
        # help
      end
    end
  end
end

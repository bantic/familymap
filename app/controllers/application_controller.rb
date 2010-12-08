class ApplicationController < ActionController::Base
  protect_from_forgery
  layout 'application'
  
  private
  
  def require_map
    unless @map = Map.find(params[:map_id])
      render_not_found
    end
  end
end

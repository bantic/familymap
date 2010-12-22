class MapsController < ApplicationController
  def new
    @map = Map.new
  end
  
  def view
    @map = Map.find(params[:id])
    render "view", :layout => "display"
  end
  
  def featured
    @map = Map.find(4)
    render "view", :layout => "display"
  end
  
  def show
    @map = Map.find(params[:id])
  end
  
  def create
    @map = Map.new(params[:map])
    if @map.save
      redirect_to new_map_item_url(@map)
    else
      render "new"
    end
  end
end

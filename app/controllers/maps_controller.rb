class MapsController < ApplicationController
  def index
    redirect_to :action => "new"
  end
  def new
    @map = Map.new
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

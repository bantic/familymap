class ItemsController < ApplicationController
  before_filter :require_map
  
  def index
    redirect_to map_url(@map)
  end

  def create
    @item = Item.new(params[:item].merge({:map => @map}))
    if @item.save
      redirect_to new_map_item_url(@map), :notice => "Added your item!"
    else
      # help
    end
  end
end

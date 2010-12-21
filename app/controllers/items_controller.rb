class ItemsController < ApplicationController
  before_filter :require_map
  
  def index
    redirect_to map_url(@map)
  end
  
  def edit
    @item = Item.find(params[:id])
  end
  
  def update
    @item = Item.find(params[:id])
    @item.attributes = params[:item]
    if @item.save
      redirect_to edit_map_item_url(@map, @item), :notice => "Edited item."
    else
      render :action => "edit", :notice => "There was an issue editing this item."
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    
    redirect_to map_url(@map), :notice => "Deleted the item."
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

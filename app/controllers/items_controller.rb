class ItemsController < ApplicationController
  def new
    @item = Item.new
  end
  
  def create
    @item = Item.new(params[:item])
    @item.map = (Map.first || Map.create!(:title => "The First Map"))
    @item.save!
    redirect_to item_url(@item)
  end
  
  def show
    @item = Item.find(params[:id])
  end
end

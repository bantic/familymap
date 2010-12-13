class ItemsController < ApplicationController
  before_filter :require_map

  def create
    @item = Item.new(params[:item])
    if @item.save
      redirect_to map_url(@map)
    else
      # help
    end
  end
end

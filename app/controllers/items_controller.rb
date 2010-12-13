class ItemsController < ApplicationController
  before_filter :require_map

  def create
    @item = Item.new(params[:item])
    if @item.save
      render :partial => "/maps/items", :layout => false
    else
      puts "ITEM DOESN'T SAVE!! #{@item.errors.inspect}"
      # help
    end
  end
end

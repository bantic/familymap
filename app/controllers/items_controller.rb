class ItemsController < ApplicationController
  before_filter :require_map

  def create
    @item = Item.new(params[:item])
    respond_to do |format|
      if @item.save
        format.js
      else
        # help
      end
    end
  end
end
class FoodsController < ApplicationController
    skip_before_action :authenticate, only: [:create]
    before_action :find_food, only: [:show, :update, :destroy]
    
  
    def index
      @foods = Food.all.select{|food| food.users.includes(current_user)}
      render json: @foods
  
    end
  
    def show
      render json: @food
    end
  
    def create
      @food = Food.new(food_params)
      if @food.save
        @food.users << current_user
        render json: @food, status: :accepted
      else
        render json: { errors: @food.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    def destroy
      @food.destroy
      @foods = Food.all.select{|food| food.users.includes(current_user)}
      render json: @foods
    end
  
    private
  
    def food_params
      params.require(:food).permit(:id, :name, :fats, :carbs, :protein, :calories)
  
    end
  
    def find_food
      @food = Food.find(params[:id])
  
    end

end

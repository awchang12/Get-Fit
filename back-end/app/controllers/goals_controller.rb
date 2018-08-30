class GoalsController < ApplicationController
  skip_before_action :authenticate, only: [:create]
    before_action :find_goal, only: [:show, :update]
    
  
    def index
      @goals = Goal.all.select{|goal| goal.user_id == current_user.id}
      render json: @goals
  
    end
  
    def show
      render json: @goal
    end
  
    def create
      @goal = Goal.new(goal_params)
      if @goal.save
        render json: @goal, status: :accepted
      else
        render json: { errors: @goal.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    def update
  
  
    end
  
    private
  
    def goal_params
      params.require(:goal).permit(:id, :user_id, :content)
  
    end
  
    def find_goal
      @goal = Goal.find(params[:id])
  
    end
end

class UsersController < ApplicationController
    skip_before_action :authenticate, only: [:create]
    before_action :find_user, only: [:show, :update]
    
    def show_user
      render json: { 
        id: current_user.id,
        first_name: current_user.first_name, 
        last_name: current_user.last_name,
        username: current_user.username,
        height: current_user.height,
        age: current_user.age,
        startingWeight: current_user.startingWeight,
        gender: current_user.gender,
        goalWeight: current_user.goalWeight
      }
    end
  
    def index
      @users = User.all
      render json: @users, include: ['logs', 'goals', 'foods']
  
    end
  
    def show
      render json: @user, include: ['logs', 'goals', 'foods']
    end
  
    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: :accepted
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    def update
      debugger
      @user.update(user_params)
      render json: @user
    end
  
    private
  
    def user_params
      params.permit(:first_name, :last_name, :username, :id, :startingWeight, :goalWeight, :height, :age, :password, :gender)
  
    end
  
    def find_user
      @user = User.find(params[:id])
  
    end
end

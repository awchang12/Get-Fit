class LogsController < ApplicationController
    before_action :find_log, only: [:show, :update]
    
  
    def index
      @logs = Log.all.select{|log| log.user_id == current_user.id}
      render json: @logs
  
    end
  
    def show
      render json: @log
    end
  
    def create
      @log = Log.new(log_params)
      if @log.save
        render json: @log, status: :accepted
      else
        render json: { errors: @log.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    def update
  
  
    end
  
    private
  
    def log_params
      params.require(:log).permit(:id, :user_id, :weight, :date)
  
    end
  
    def find_log
      @log = Log.find(params[:id])
  
    end
end

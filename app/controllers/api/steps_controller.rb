class Api::StepsController < ApplicationController
  def index
    @steps = Step.all
    render json: @steps
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render json: @step
    else
      render {error: "Cannot create", status: 422}
    end
  end

  def update
    @step = Step.find_by_id(params[:id])
    if @step && @step.update
      render json: @step
    else
      render {error: "Cannot update", status: 422}
    end

  end

  def destroy
    @step = Step.find_by_id(params[:id])
    if @step && @step.destroy
      render json: @step
    else
      render {error: "Cannot destroy", status: 422}
    end
  end

  private

  def step_params
    params.require(:step).permit(:title, :todo_id, :done)
  end


end

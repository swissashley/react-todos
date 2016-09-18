class Api::TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: {success: true, todo: @todo}
    else
      render json: {success: false}, status: unprocessable_entity
    end
  end

  def update
    @todo = Todo.find_by_id(params[:id])

    if @todo.update(todo_params)
      render json: {success: true, todo: @todo}
    else
      render json: {success: false}, status: unprocessable_entity
    end
  end

  def destroy
    @todo = Todo.find_by_id(params[:id])
    if @todo && @todo.destroy
      render json: {success: true, todo: @todo}
    else
      render json: {success: false}, status: :not_found
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end

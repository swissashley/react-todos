export const fetchSteps = (todo_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/todos/${todo_id}/steps`,
    success,
    error
  });
};

export const createStep = (todo_id, step, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/todos/${todo_id}/steps`,
    data: step,
    success,
    error
  });
};

export const updateStep = (step, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/steps/${step.id}`
    data: { step },
    success,
    error
  });
};

export const destroyStep = (step, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/steps/${step.id}`,
    success,
    error
  });
};

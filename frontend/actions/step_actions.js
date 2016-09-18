const StepActions = {
  REQUEST_STEPS: "REQUEST_STEPS",
  RECEIVE_STEPS: "RECEIVE_STEPS",
  CREATE_STEP: "CREATE_STEP",
  RECEIVE_STEP: "RECEIVE_STEP",
  DESTROY_STEP: "DESTROY_STEP",
  REMOVE_STEP: "REMOVE_STEP",
  UPDATE_STEP: "UPDATE_STEP",

  requestSteps: () => ({
    type: StepActions.REQUEST_STEPS
  }),
  receiveSteps: steps => ({
    type: StepActions.RECEIVE_STEPS,
    steps
  }),
  createStep: step => ({
    type: StepActions.CREATE_STEP,
    step
  }),
  receiveStep: step => ({
    type: StepActions.RECEIVE_STEP,
    step
  }),
  toggleStep: step => ({
    type: StepActions.UPDATE_STEP,
    step: {
      id: step.id,
      todo_id: step.todo_id,
      title: step.title,
      done: !step.done
    }
  }),
  destroyStep: step => ({
    type: StepActions.DESTROY_STEP,
    step
  }),

  removeStep: step => ({
    type: StepActions.REMOVE_STEP,
    step
  })
};

export default StepActions;

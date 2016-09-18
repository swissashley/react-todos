import StepActions from '../actions/step_actions';
import { fetchSteps, createStep, updateStep, destroyStep } from '../util/step_api_util';


const stepMiddleware = store => next => action => {
  switch (action.type) {
    case StepActions.REQUEST_STEPS: {
      const success = data => dispatch(StepActions.receiveSteps(data));
      fetchSteps(success);
      return next(action);
    }

    case StepActions.CREATE_STEP: {
      const success = data => dispatch(StepActions.receiveStep(data.step));
      const error = (err) => console.log(err);
      createStep(action.step, success, error);
      return next(action);
    }

    case StepActions.UPDATE_STEP: {
      const success = data => dispatch(StepActions.receiveStep(data.step));
      const error = (err) => console.log(err);
      updateStep(action.step, success, error);
      return next(action);
    }

    case StepActions.DESTROY_STEP: {
      const success = data => dispatch(StepActions.removeStep(data.step));
      const error = (err) => console.log(err);
      destroyStep(action.step, success, error);
      return next(action);
    }
    default:
      next(action);
  }
}

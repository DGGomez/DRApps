import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import dataReducer from './dataReducer';

export default combineReducers({
  data: dataReducer
});
import { combineReducers } from 'redux';
import manuFacturersReducer from './manuFacturersReducer';

const rootReducer = combineReducers({
  manufacturers: manuFacturersReducer,
});

export default rootReducer;
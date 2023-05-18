import { combineEpics } from 'redux-observable';
import manufacturersEpic from './manufacturersEpic';

const rootEpic = combineEpics(
  manufacturersEpic
);

export default rootEpic;

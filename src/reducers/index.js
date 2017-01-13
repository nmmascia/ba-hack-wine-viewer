import { combineReducers } from 'redux';

import mapViewer from 'reducers/map-viewer';
import winesViewer from 'reducers/wines-viewer';
import wines from 'reducers/wines';

const rootReducer = combineReducers({
  mapViewer,
  winesViewer,
  wines,
});

export default rootReducer;

import { combineReducers } from 'redux';

import mapViewer from 'reducers/map-viewer';
import winesViewer from 'reducers/wines-viewer';

const rootReducer = combineReducers({
  mapViewer,
  winesViewer,
});

export default rootReducer;

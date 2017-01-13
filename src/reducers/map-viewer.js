import { MAP_VIEWER_TYPES } from 'constants/map-viewer-types';

const CHANGE_MAP_TYPE = 'CHANGE_MAP_TYPE';

const initialState = {
  mapType: MAP_VIEWER_TYPES.WINE_PINS.key,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MAP_TYPE: {
      return {
        mapType: action.payload.mapType,
      };
    }
    default: {
      return state;
    }
  }
};

export const changeMapType = (mapType) => ({
  type: CHANGE_MAP_TYPE,
  payload: { mapType },
});

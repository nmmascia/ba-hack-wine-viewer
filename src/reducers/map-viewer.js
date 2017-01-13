import { MAP_VIEWER_TYPES } from 'constants/map-viewer-types';

import { getUsersWineLocations, getAllWineLocations } from 'api';
import { setWines } from 'reducers/wines';

const CHANGE_MAP_TYPE = 'CHANGE_MAP_TYPE';
const SET_MAP_PINS = 'SET_MAP_PINS';
const SET_HEAT_MAP = 'SET_HEAT_MAP';

const initialState = {
  mapType: MAP_VIEWER_TYPES.WINE_PINS.key,
  mappedPins: [],
  heatMap: [],
};

const formatMapData = (data) => {
  return data.reduce((acc, curr) => {
    if (!curr.latitude || !curr.longitude) {
      return acc;
    }

    return [
      ...acc,
      {
        id: curr.id,
        lat: curr.latitude,
        lng: curr.longitude,
      },
    ];
  }, []);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MAP_TYPE: {
      return {
        ...state,
        mapType: action.payload.mapType,
      };
    }
    case SET_MAP_PINS: {
      return {
        ...state,
        mappedPins: formatMapData(action.payload.data),
      };
    }
    case SET_HEAT_MAP: {
      return {
        ...state,
        heatMap: formatMapData(action.payload.data),
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

const setMappedPins = (data) => ({
  type: SET_MAP_PINS,
  payload: { data },
});

const setHeatMap = (data) => ({
  type: SET_HEAT_MAP,
  payload: { data },
});

export const fetchWinePinData = (userId) => (dispatch) => {
  getUsersWineLocations(userId)
    .then((data) => {
      // dispatch(setWines(data));
      dispatch(setMappedPins(data));
    })
    .catch(console.warn);
};

export const fetchHeatMapData = () => (dispatch) => {
  getAllWineLocations()
    .then((data) => {
      dispatch(setHeatMap(data));
    })
    .catch(console.warn);
};

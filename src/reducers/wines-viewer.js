import { WINE_VIEWER_TYPES } from 'constants/wine-viewer-types';

const SET_WINE_TYPE = 'SET_WINE_TYPE';
const SET_CURRENT_WINE_ID = 'SET_CURRENT_WINE_ID';

const initialState = {
  wineType: WINE_VIEWER_TYPES.TASTING_NOTES.key,
  currentWineId: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WINE_TYPE: {
      return {
        ...state,
        wineType: action.payload.wineType,
      };
    }
    case SET_CURRENT_WINE_ID: {
      return {
        ...state,
        currentWineId: action.payload.wineId,
      };
    }
    default: {
      return state;
    }
  }
};

export const setWineType = (wineType) => ({
  type: SET_WINE_TYPE,
  payload: { wineType },
});

export const setCurrentWineId = (wineId) => ({
  type: SET_CURRENT_WINE_ID,
  payload: { wineId },
});

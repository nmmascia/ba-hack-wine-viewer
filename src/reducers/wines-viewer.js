import { WINE_VIEWER_TYPES } from 'constants/wine-viewer-types';

const CHANGE_WINE_TYPE = 'CHANGE_WINE_TYPE';

const initialState = {
  wineType: WINE_VIEWER_TYPES.TASTING_NOTES.key,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WINE_TYPE: {
      return {
        wineType: action.payload.wineType,
      };
    }
    default: {
      return state;
    }
  }
};

export const changeWineType = (wineType) => ({
  type: CHANGE_WINE_TYPE,
  payload: { wineType },
});

const SET_NOTES_FOR_WINE = 'SET_NOTES_FOR_WINE';
const SET_WINES = 'SET_WINES';
const SET_WINE_RATING = 'SET_WINE_RATING';

const initialState = {
  byId: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WINES: {
      const byId = action.payload.wines.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.id]: {
            ...curr,
            notes: '',
            rating: 0,

          },
        };
      }, {});

      return {
        ...state,
        byId,
      };
    }
    case SET_NOTES_FOR_WINE: {
      const { id, notes } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            notes,
          },
        },
      };
    }
    case SET_WINE_RATING: {
      const { id, rating } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            rating,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const setNotesForWine = (id, notes) => ({
  type: SET_NOTES_FOR_WINE,
  payload: { id, notes },
});

export const setWines = (wines) => ({
  type: SET_WINES,
  payload: { wines },
});

export const setWineRating = (id, rating) => ({
  type: SET_WINE_RATING,
  payload: { id, rating },
});

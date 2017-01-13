const SET_NOTES_FOR_WINE = 'SET_NOTES_FOR_WINE';
const SET_WINES = 'SET_WINES';

const initialState = {
  byId: {
    1: {
      dateDelivered: new Date().toISOString(),
      id: 1,
      name: 'Las Canovas',
      rating: 5,
      varietal: 'Pinot Grigio',
      year: '2017',
      notes: '',
    },
    2: {
      dateDelivered: new Date().toISOString(),
      id: 2,
      name: 'Tathata',
      rating: 5,
      varietal: 'Pinot Grigio',
      year: '2017',
      notes: '',
    },
    3: {
      dateDelivered: new Date().toISOString(),
      id: 3,
      name: 'Asilomar Trail',
      rating: 5,
      varietal: 'Pinot Grigio',
      year: '2017',
      notes: '',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
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

const initialState = {
  byId: {
    1: {
      dateDelivered: new Date().toISOString(),
      id: 1,
      name: 'Las Canovas',
      rating: 5,
      varietal: 'Pinot Grigio',
      year: '2017',
    },
    2: {
      dateDelivered: new Date().toISOString(),
      id: 2,
      name: 'Tathata',
      rating: 5,
      varietal: 'Pinot Grigio',
      year: '2017',
    },
    3: {
      dateDelivered: new Date().toISOString(),
      id: 3,
      name: 'Asilomar Trail',
      rating: 5,
      varietal: 'Pinot Grigio',
      year: '2017',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

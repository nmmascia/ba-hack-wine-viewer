import fetch from 'isomorphic-fetch';

const API_BASE = 'https://wine-viewer.herokuapp.com';

export const getUsersWineLocations = (userId) => {
  const url = `${API_BASE}/wines/locations/${userId}`;

  return fetch(url, { method: 'GET' })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    });
};

export const getAllWineLocations = () => {
  const url = `${API_BASE}/users/info`;

  return fetch(url, { method: 'GET' })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    });
};

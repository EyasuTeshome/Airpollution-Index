/* eslint-disable consistent-return */
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeatherSuccess = (payload) => ({
  type: FETCH_WEATHER,
  payload,
});

export const fetchWeather = () => async (dispatch) => {
  const data = await fetch(
    'https://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=120c2559b5a8678ebed46cf9ff276f28',
    {
      method: 'GET',
    },
  );
  try {
    const fetchedData = await data.json();
    dispatch(fetchWeatherSuccess(fetchedData));
  } catch (error) {
    return error;
  }
};
export const fetchWeatherWithInput = (lat, lon) => async (dispatch) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=120c2559b5a8678ebed46cf9ff276f28`,
    {
      method: 'GET',
    },
  );
  try {
    const fetchedData = await data.json();
    dispatch(fetchWeatherSuccess(fetchedData));
  } catch (error) {
    return (error);
  }
};

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default weatherReducer;

import configureStore from 'redux-mock-store';

import {
  fetchWeatherSuccess,
} from '../../redux/weather/weatherReducer';

describe('Dispatch actions tests', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it('should dispatch fetch weather action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(fetchWeatherSuccess());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'FETCH_WEATHER' };
    expect(actions).toEqual([expectedPayload]);
  });
});

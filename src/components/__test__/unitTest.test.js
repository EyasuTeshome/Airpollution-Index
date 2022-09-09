import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Form from '../__mock__/Form';
import TopBar from '../Header';

describe('Components snapshot tests', () => {
  const mockStore = configureStore();

  it('Form page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <Form />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('TopBar renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <TopBar />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

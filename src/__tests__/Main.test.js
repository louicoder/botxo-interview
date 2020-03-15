import React from 'react';
import { mount, shallow } from 'enzyme';
import Main from '../Components/Main';
// import * as redux from 'react-redux';
// import Fixtures from '../Fixture';
import mockStore from '../Store/MockStore';
import { Provider } from 'react-redux';
import MainButtons from '../Components/MainButtons';

describe('<Main /> component', () => {
  let state;
  let wrapper;

  beforeEach(() => {
    const store = mockStore({ genericUsers: [], specificUsers: [], loading: false });
    const props = {
      switchView: jest.fn(),
      switchViewHandler: jest.fn()
    };
    wrapper = mount(
      <Provider store={store}>
        <Main {...props} />
      </Provider>
    );
  });

  it('Render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with the right store state', () => {
    state = { genericUsers: [], specificUsers: [], loading: false };
    expect(wrapper.props().store.getState()).toEqual(state);
  });

  it('switches from one view to another', () => {
    const switchView = wrapper.find(MainButtons).prop('switchView');
    const button = wrapper.find(MainButtons).props();
    // console.log('debug', button);
    // console.log('wrapper', mainButtons);
    // const switchViewHandler = jest.fn();
    // const shal = mount(<Main />);
    // const spy = jest.spyOn(wrapper, 'switchViewHandler');
    // console.log('instance', spy);
  });
});

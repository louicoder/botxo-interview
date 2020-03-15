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
    // const switchViewHandler = jest.fn(() => {});
    // const newProps = { switchView: jest.fn(), checked: 'ge' };
    // const mainButtons = shallow(<MainButtons {...newProps} switchViewHandler={switchViewHandler} />);
    // const spy = jest.spyOn(mainButtons, 'switchViewHandler');
    // // // const spy = jest.spyOn(mainButtons.props(), 'switchView')();
    // // const btn = mainButtons.find('button#ge-button').simulate('click');
    // console.log('mainButtons', spy);
  });
});

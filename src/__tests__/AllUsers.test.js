import React from 'react';
import { mount } from 'enzyme';
import Fixtures from '../Fixture';
import mockStore from '../Store/MockStore';
import { Provider } from 'react-redux';
import AllUsers from '../Components/AllUsers';

describe('<AllUsers /> component', () => {
  let wrapper, USERS, store, props;
  beforeEach(() => {
    store = mockStore({ genericUsers: [], specificUsers: [], loading: false });
    USERS = Fixtures;
    props = {
      users: USERS,
      header: 'generic',
      genericOrSpecific: 'generic',
      removeUserHandler: jest.fn()
    };
    wrapper = mount(
      <Provider store={store}>
        <AllUsers {...props} />
      </Provider>
    );
  });

  afterEach(() => {
    USERS = Fixtures;
  });

  it('Render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render h3 header with Generic word when header="generic" ', () => {
    expect(wrapper.find('h3').props().children).toEqual('generic');
  });

  it('should render 32 list items', () => {
    expect(wrapper.find('li').length).toEqual(32);
  });

  it('should call confirm function when user confirms action in the dialog', () => {
    window.confirm = jest.fn(() => true);
    wrapper.find('li').first().find('span').simulate('click', 'Alberto');
    expect(window.confirm).toHaveBeenCalled();
  });

  it('should not dispatch REMOVE_GENERIC_USER_ACTION when user cancels dialog', () => {
    window.confirm = jest.fn(() => false);
    wrapper.find('li').first().find('span').simulate('click', 'Alberto');
    expect(store.getActions()).toEqual([]);
  });

  it('should not dispatch REMOVE_SPECIFIC_USER_ACTION when user cancels dialog', () => {
    props = { ...props, genericOrSpecific: 'specific', header: 'specific' };
    wrapper = mount(
      <Provider store={store}>
        <AllUsers {...props} />
      </Provider>
    );
    window.confirm = jest.fn(() => false);
    wrapper.find('li').first().find('span').simulate('click', 'Alberto');
    expect(store.getActions()).toEqual([]);
  });

  it('should render first item as disabled item when genericOrSpecific property is true', () => {
    const _USERS = (USERS[0] = { ...Fixtures[0], fromGeneric: true });
    props = { ...props, USERS: _USERS };
    wrapper = mount(
      <Provider store={store}>
        <AllUsers {...props} />
      </Provider>
    );
    expect(wrapper.find('li').first().prop('disabled')).toBeTruthy();
  });

  it('should dispatch REMOVE_GENERIC_USER_ACTION when element delete icon is clicked and user confirms', () => {
    const _USERS = (USERS[0] = { ...Fixtures[0], fromGeneric: false });
    props = { ...props, USERS: _USERS };
    wrapper = mount(
      <Provider store={store}>
        <AllUsers {...props} />
      </Provider>
    );

    window.confirm = jest.fn(() => true);
    wrapper.find('li').first().find('span').simulate('click', 'Alberto');
    expect(store.getActions()).toEqual([ { type: 'REMOVE_GENERIC_USER_ACTION', name: 'Alberto' } ]);
  });

  it('should dispatch REMOVE_SPECIFIC_USER_ACTION when element delete icon is clicked and user confirms', () => {
    props = { ...props, genericOrSpecific: 'specific', header: 'specific' };
    wrapper = mount(
      <Provider store={store}>
        <AllUsers {...props} />
      </Provider>
    );
    window.confirm = jest.fn(() => true);
    wrapper.find('li').last().find('span').simulate('click', 'Santiago');
    expect(store.getActions()).toEqual([ { type: 'REMOVE_SPECIFIC_USER_ACTION', name: 'Santiago' } ]);
  });

  it('should fall back to default case when genericOrSpecific is undefined', () => {
    props = { ...props, genericOrSpecific: 'human' };
    wrapper = mount(
      <Provider store={store}>
        <AllUsers {...props} />
      </Provider>
    );
  });
});

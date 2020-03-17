import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import GenericForm from '../Components/GenericForm';
import UserComponent from '../Components/UserComponent';
import MockStore from '../Store/MockStore';

describe('<GenericForm /> component', () => {
  let store, wrapper, props;

  beforeEach(() => {
    store = MockStore({ genericUsers: [], specificUsers: [], loading: false });
    props = {
      changeName: jest.fn(),
      setName: jest.fn(),
      addToGenericList: jest.fn(),
      name: '',
      age: 0,
      setAge: jest.fn()
    };
    wrapper = mount(
      <Provider store={store}>
        <GenericForm {...props} />
      </Provider>
    );
  });

  it('Render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call ADD_GENERIC_USER_ACTION on button click while name and age exist', () => {
    wrapper.find(UserComponent).find('input').first().simulate('change', { target: { value: 'louis' } });
    wrapper.find(UserComponent).find('input').last().simulate('change', { target: { value: 20 } });

    wrapper.find('button').simulate('click');
    expect(store.getActions()).toEqual([ { type: 'ADD_GENERIC_USER_ACTION', name: 'louis', age: 20 } ]);
  });

  it('simulate a change name event on child component <UserComponent />', () => {
    wrapper.find(UserComponent).find('input').first().simulate('change', { target: { value: 'louis' } });
    expect(wrapper.find(UserComponent).find('input').first().props().value).toEqual('louis');
  });

  it('simulate a change age event on child component <UserComponent />', () => {
    wrapper.find(UserComponent).find('input').last().simulate('change', { target: { value: 20 } });
    expect(wrapper.find(UserComponent).find('input').last().props().value).toEqual(20);
  });
});

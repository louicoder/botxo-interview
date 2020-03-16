import React from 'react';
import { mount, shallow } from 'enzyme';
import mockStore from '../../Store/MockStore';
import { Provider } from 'react-redux';
import GenericForm from '../../Components/GenericForm';
import UserComponent from '../../Components/UserComponent';
import { useDispatch } from 'react-redux';

describe('<GenericForm /> component', () => {
  let state;
  let wrapper;
  beforeEach(() => {
    const store = mockStore({ genericUsers: [], specificUsers: [], loading: false });
    let props = { setName: jest.fn(), setAge: jest.fn(), addToGenericList: jest.fn() };
    wrapper = mount(
      <Provider store={store} addToGenericList={() => jest.fn()}>
        <GenericForm {...props} />
      </Provider>
    );
  });

  it('Render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with the right store state', () => {
    // const user = shallow(<UserComponent changeName={() => jest.fn()}  />);
    // console.log('First', user.find('input').first().debug());
    // user.find('input').first().simulate('change', { event: { target: { value: 'louis' } } });
    // console.log('Second', user.find('input').first().debug());
    // state = { genericUsers: [], specificUsers: [], loading: false };
    // expect(wrapper.props().store.getState()).toEqual(state);
  });

  it('switches from one view to another', () => {
    const user = shallow(<UserComponent changeName={() => jest.fn()} changeAge={() => jest.fn()} />);
    user.find('input').first().simulate('change', { event: { target: { value: 'louis' } } });
    user.find('input').last().simulate('change', { event: { target: { value: 20 } } });
    wrapper.find(GenericForm).prop('setName')('');
    wrapper.find(GenericForm).prop('setAge')(undefined);
    // wrapper.find(GenericForm).prop('addToGenericList')();
    // wrapper.find(GenericForm).prop('setName')('');
    // wrapper.find(GenericForm).prop('setAge')(0);
    // console.log('First', wrapper.props());
  });
});

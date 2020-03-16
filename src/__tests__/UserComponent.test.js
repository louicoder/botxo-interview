import React from 'react';
import { shallow } from 'enzyme';
import UserComponent from '../Components/UserComponent';

describe('<UserComponent /> component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      changeName: jest.fn(),
      changeAge: jest.fn(),
      addToGenericList: jest.fn(),
      name: 'louis',
      age: 10
    };
    wrapper = shallow(<UserComponent {...props} onChange={() => jest.fn()} />);
  });

  it('Render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#name-input').prop('value')).toEqual('louis');
    expect(wrapper.find('#age-input').prop('value')).toEqual(10);
  });

  it('calls the changeName function with an object', () => {
    wrapper.find('#name-input').simulate('change', { target: { value: 'louis' } });
    expect(props.changeName).toBeCalledWith({ target: { value: 'louis' } });
  });

  it('switches from one view to another', () => {
    wrapper.find('#age-input').simulate('change', { target: { value: 20 } });
    expect(props.changeAge).toBeCalledWith({ target: { value: 20 } });
  });

  it("calls changeName function when there's a change in the name ", () => {
    wrapper.find('#name-input').simulate('change', { target: { value: 'michael' } });
    expect(props.changeName).toBeCalled();
    expect(props.changeName).toBeCalledWith({ target: { value: 'michael' } });
  });

  it("should call changeAge function when there's a change in the age ", () => {
    wrapper.find('#age-input').simulate('change', { target: { value: 20 } });
    expect(props.changeAge).toBeCalled();
    expect(props.changeAge).toBeCalledWith({ target: { value: 20 } });
  });
});

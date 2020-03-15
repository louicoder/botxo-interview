import React from 'react';
import { mount, shallow } from 'enzyme';
import MainButtons from '../Components/MainButtons';

describe('<MainButtons /> component', () => {
  let wrapper,
    props = { switchView: jest.fn(), checked: 'ge' };

  it('renders with the right store state', () => {
    wrapper = shallow(<MainButtons {...props} />);
    wrapper.find('button#ss-button').simulate('click');
    expect(wrapper.find('button#ge-button').props().className).toEqual('active-main-button');
    expect(wrapper.find('button#ss-button').props().className).toEqual('');
  });

  it('switches from one view to another', () => {
    props = { ...props, checked: 'ss' };
    wrapper = shallow(<MainButtons {...props} />);
    wrapper.find('button#ge-button').simulate('click');
    expect(wrapper.find('button#ss-button').props().className).toEqual('active-main-button');
    expect(wrapper.find('button#ge-button').props().className).toEqual('');
  });
});

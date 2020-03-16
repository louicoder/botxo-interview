import React from 'react';
import { shallow } from 'enzyme';
import SecondaryButtons from '../Components/SecondaryButtons';

describe('<SecondaryButtons /> component', () => {
  let wrapper;
  let props;
  const paragraphFinder = (p) => p.find('p').props().children;
  const inputFinder = (wrapper) => wrapper.find('input');
  beforeEach(() => {
    props = {
      switchView: jest.fn(),
      checked: 'ge',
      onChange: jest.fn()
    };
    wrapper = shallow(<SecondaryButtons {...props} />);
  });

  it('Render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set first radio button to true when checked property = "ge"', () => {
    expect(inputFinder(wrapper).first().props().checked).toBeTruthy();
    expect(inputFinder(wrapper).last().props().checked).toBeFalsy();
  });

  it('should set second radio button to true when checked property = "ss"', () => {
    props = { ...props, checked: 'ss' };
    wrapper = shallow(<SecondaryButtons {...props} />);
    expect(inputFinder(wrapper).first().props().checked).toBeFalsy();
    expect(inputFinder(wrapper).last().props().checked).toBeTruthy();
  });

  it('should call switchView function when first radio button is clicked', () => {
    wrapper.find('input').first().simulate('change', 'ge');
    expect(props.switchView).toHaveBeenCalled();
    expect(props.switchView).toHaveBeenCalledWith('ge');
  });

  it('should call switchView function when second radio button is clicked', () => {
    wrapper.find('input').last().simulate('change', 'ss');
    expect(props.switchView).toHaveBeenCalled();
    expect(props.switchView).toHaveBeenCalledWith('ss');
  });

  it('should find a paragraph with word NEXT', () => {
    expect(paragraphFinder(wrapper)).toEqual('NEXT >');
  });

  it("should call switchView function with ss property when checked property = 'ge' ", () => {
    wrapper.find('p').simulate('click');
    expect(props.switchView).toHaveBeenCalled();
    expect(props.switchView).toHaveBeenCalledWith('ss');
  });

  it("should call switchView function with ss property when checked property = 'ge' ", () => {
    props = { ...props, checked: 'ss' };
    wrapper = shallow(<SecondaryButtons {...props} />);
    wrapper.find('p').simulate('click');
    expect(props.switchView).toHaveBeenCalled();
    expect(props.switchView).toHaveBeenCalledWith('ge');
  });
});

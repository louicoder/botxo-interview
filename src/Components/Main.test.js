import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import * as redux from 'react-redux';
import Fixtures from '../Fixture';

describe('<Main /> component', () => {
  let spyDispatch, spySelector;
  beforeEach(() => {
    spyDispatch = jest.spyOn(redux, 'useDispatch');
    spySelector = jest.spyOn(redux, 'useSelector');
  });
  it('Render without crashing', () => {
    spyDispatch.mockReturnValue(Fixtures);
    spySelector.mockReturnValue([]);
    const wrapper = shallow(<Main />);
    console.log('debuggging', wrapper.props());
    // expect(wrapper).toMatchSnapshot();
    // expect(wrapper);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../Components/Main';

describe('<Main /> component', () => {
  it('Render without crashing', () => {
    const wrapper = shallow(<Main />);
    console.log('debuggging', wrapper.debug());
  });
});

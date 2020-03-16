import React from 'react';
import { mount, shallow } from 'enzyme';
import mockStore from '../Store/MockStore';
import * as ReactRedux from 'react-redux';
import GenericForm from '../Components/GenericForm';
import UserComponent from '../Components/UserComponent';
import { useDispatch } from 'react-redux';
import { addGenericUser } from '../store/ActionCreators';

describe('<GenericForm /> component', () => {
  let state;

  it('Render without crashing', () => {});

  it('renders with the right store state', () => {});

  it('switches from one view to another', () => {});
});

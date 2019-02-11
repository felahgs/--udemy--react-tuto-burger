import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from '../NavigationItems';
import NavigationItem from './NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
<<<<<<< HEAD

    it('should render one <NavigationItem /> elements with a link to "/logout"', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains( <NavigationItem link="/logout">Logout</NavigationItem> )).toEqual(true);
    });
=======
>>>>>>> 45af9aa918cfcbefab785c19cc1238e8c3652266
});
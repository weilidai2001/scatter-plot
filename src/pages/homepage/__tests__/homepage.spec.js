import React from 'react';
import { shallow } from 'enzyme';
import homepage from '../';

const PROPS = {
    minX: 0,
    maxX: 100,
    minY: 0,
    maxY: 100,
    points: [],
    ajaxStatus: false
};

describe('homepage UI', () => {
    it('should render', () => {
        const wrapper = shallow(<homepage {...PROPS} />);
        expect(wrapper).toMatchSnapshot();
    });
});

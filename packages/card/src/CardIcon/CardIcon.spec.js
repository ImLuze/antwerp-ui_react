import React from 'react';
import { mount } from 'enzyme';
import CardIcon from './CardIcon';

describe('CardIcon', () => {

    test('CardIcon renders children correctly', () => {
        const icon = 'fa-lock';
        const component = mount(<CardIcon icon={icon} />);

        expect(component.find(`.${icon}`).exists()).toEqual(true);
    });
});

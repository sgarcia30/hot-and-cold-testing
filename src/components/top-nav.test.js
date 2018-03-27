import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav.js';

describe(<TopNav />, () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('Should call onRestartGame when clicked on', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onRestartGame={callback}/>);
		wrapper.find('a.new').simulate('click');
		expect(callback).toHaveBeenCalled();
	})

	it('Should call onGenerateAuralUpdate when clicked on', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onGenerateAuralUpdate={callback}/>);
		wrapper.find('a.visuallyhidden').simulate('click');
		expect(callback).toHaveBeenCalled();
	})
})
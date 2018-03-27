import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form.js';

describe(<GuessForm />, () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Calls a function onSubmit when the form is submitted', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
		wrapper.find('input#userGuess').instance().value = 15;
		wrapper.simulate('submit', {preventDefault: () => {}});
		expect(callback).toHaveBeenCalled();
	})
	// make sure the value goes back to ''
	it('Returns the input value to equal empty strings after the form submits', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
		wrapper.find('input#userGuess').instance().value = 15;
		wrapper.simulate('submit', {preventDefault: () => {}});
		expect(wrapper.find('input#userGuess').text()).toEqual('');
	})
})
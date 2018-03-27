import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game.js';

describe(<Game />, () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});

	it('Should have guesses state property initially', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.state('guesses')).toEqual([]);
	})

	it('Should have feedback state property initially', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
	})

	it('Should have auralStatus state property initially', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.state('auralStatus')).toEqual('');
	})

	it('Should have correctAnswer state property initially', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
	})

	it('Restart game on execution of restartGame func', () => {
		const wrapper = shallow(<Game />);
		wrapper.instance().restartGame();
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('auralStatus')).toEqual('');
	})

	it('Make a guess on execution of makeGuess func', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({correctAnswer: 85})
		wrapper.instance().makeGuess(10);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
	})

	// play game and call generateAuralStatus
	it('Generate an Aural Update when generateAuralUpdate func is called', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({correctAnswer: 36});
		wrapper.setState({guesses: [25]});
		wrapper.setState({feedback: 'You\'re Warm.'});
		wrapper.instance().generateAuralUpdate();
		expect(wrapper.state('auralStatus')).toEqual(`Here's the status of the game right now: You're Warm. You've made 1 guess. It was: 25`)

	})
})
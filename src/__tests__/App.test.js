import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import Event from '../Event';

describe('<App /> component', () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	test('render CitySearch', () => {
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
	});

	test('render NumberOfEvents', () => {
		expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
	});

	test('render list of events', () => {
		expect(AppWrapper.find(EventList)).toHaveLength(1);
	});

	test('render Events', () => {
		expect(AppWrapper.find(Event)).toHaveLength(1);
	});
});

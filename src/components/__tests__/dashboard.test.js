import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';

import { Dashboard } from '../dashboard';

Enzyme.configure({ adapter: new Adapter() });


describe('Dashboard', () => {
  test('should render correctly', () => {
    const component = renderer.create(<Dashboard
        getPokemon={() => {}}
        getPokemonsCount={() => {}}
        id={123}
        isLoading={false}
        pokemonsCount={700}
    />);
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });
});

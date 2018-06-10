import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

import ButtonsSection from '../buttonsSection';

Enzyme.configure({adapter: new Adapter()});


describe('ButtonsSection', () => {
  it('should render correctly123', () => {
    const output = shallow(
      <ButtonsSection
        showPreviousPokemon={() => {}}
        showNextPokemon={() => {}}
      >
        <div>hello</div>
      </ButtonsSection>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

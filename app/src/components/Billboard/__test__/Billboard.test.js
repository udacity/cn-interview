import React from 'react';
import { render } from 'enzyme';
import Billboard from '..';

it('renders correctly', () => {
  const wrapper = render(
    <Billboard title="The Title" body="The Body" />
  );
  expect(wrapper).toMatchSnapshot();
});

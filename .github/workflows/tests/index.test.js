import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';


describe('Home Page', () => {
  test('renders GitHub link', () => {

    const { getByText } = render(<Home />);

    const gitHubLink = getByText('GitHub');

    expect(gitHubLink).toBeInTheDocument();
  });
});

import React from 'react';
import DetailsPage from '../detailsPage'
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useParams: () => ({
      id: "3443"
    }),
    useRouteMatch: () => ({ url: '/art/3443' }),
  }));

test("Testing a Details page", () => {
    const component = renderer.create(
        <DetailsPage />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
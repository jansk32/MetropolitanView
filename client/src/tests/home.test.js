
import React from 'react';
import HomePage from '../homePage'
import renderer from 'react-test-renderer';


test("Testing a Home Page", () => {
    const component = renderer.create(
        <HomePage />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})
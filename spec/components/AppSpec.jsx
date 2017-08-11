import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

describe('App', () => {
  const Utils = ReactTestUtils;

  it('can render without error', function() {
    const component, element;
    // First we create an element, which is a description of the component we
    // would like to render (It has no methods, see:
    // https://facebook.github.io/react/docs/glossary.html so it isn't useful
    // for testing by itself)
    element = React.createElement(
      App, // component class
      {} // props go here
      // You can also add children here as the last argument
    );

    // Render into a document fragment and return the full component instance.
    // You'll generally be testing `component`'s behavior in the rest of your
    // test.
    expect(function() {
      component = Utils.renderIntoDocument(element);
    }).not.toThrow();
  });
});

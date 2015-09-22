import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import Icon from '../src/sui-icon';

describe('sui-icon component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(Icon).toNotBe(undefined);
    });
  });

  describe('sui-icon renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(Icon);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});

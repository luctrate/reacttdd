import React from 'react';
import {findByTestAttr, checkProps} from './../../../utils';
import SharedButton from './index';
import {shallow} from 'enzyme';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOt throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(()=> {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it('Should Render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});

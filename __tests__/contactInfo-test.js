import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ContactInfo from '../lib/contactInfo';

jest.unmock('../lib/contactInfo');

describe("ContactInfo", function(){

  it("should show the contact information", function(){
    expect(ContactInfo.render()).toContain(`<li></li>`);
  });
});

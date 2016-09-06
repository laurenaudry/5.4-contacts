import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Contacts from '../lib/contacts';

jest.unmock('../lib/contacts');

describe("Contacts", function(){

  it("should show the contacts names", function(){
    expect(Contacts.render()).toContain(`<h2></h2>`);
  });
});

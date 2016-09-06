import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Main from './lib/main'
import Contacts from './lib/contacts'
import ContactInfo from './lib/contactInfo'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }/>
    <Route path="/Contacts/:name/:number/:email/:address/:profile_img" component={ ContactInfo }/>
  </Router>
), document.getElementById('app'))

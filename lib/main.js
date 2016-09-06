import React from 'react'
import Contacts from './contacts.js'

export default React.createClass({
  render() {
    return (
      <main>
        <div className="header-box">
          <h1 className="heading">Contacts</h1>
            <Contacts/>
        </div>
      </main>
    )
  }
})

import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    let contact = this.props.params;
    return (
      <main>
        <div className="header">
          <Link className="back" to="/">↖︎</Link>
          <img className="contactInfo_img" src={`../images/${contact.profile_img}`} alt="default pic" />
        </div>
        <ul className="details">
          <li className="contact_info">
            {contact.name}
          </li>
          <li className="contact_info">
            {contact.email}
          </li>
          <li className="contact_info">
            {contact.number}
          </li>
          <li className="contact_info">
            {contact.address}
          </li>
        </ul>
      </main>
    )
  }
})

import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    let contactInfo = this.props.params;
    return (
      <main>
        <div className="head">
          <h1 className="name">
          {contactInfo.name}
          </h1>
          <img className="contact_img" src={`../images/${contactInfo.profile_img}`} alt="default pic" />
        </div>
        <ul className="details">
          <li className="contact_info">
            {contactInfo.address}
          </li>
          <li className="contact_info">
            {contactInfo.phone}
          </li>
          <li className="contact_info">
            {contactInfo.email}
          </li>
        </ul>
      </main>
    )
  }
})

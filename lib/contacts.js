import React from 'react'
import { Link } from 'react-router'



export default React.createClass({
  getDefaultProps() {
    return {
      contacts: [
        {
          name: "Sterling Archer",
          number: "123-456-7891",
          email: "archer@isis.com",
          profile_img: "archer.jpeg",
          address: "123 abc st."
        },{
          name: "Bob Belcher",
          number: "546-825-0236",
          email: "headchef@bobsburgers.com",
          profile_img: "bob.jpeg",
          address: "246 Ocean Avenue"
        },{
          name: "Doug",
          number: "222-222-2222",
          email: "doug@abc.com",
          profile_img: "doug.jpeg",
          address: "1738 Up"
        },{
          name: "Kevin",
          number: "926-564-4524",
          email: "kevin@bird.net",
          profile_img: "kevin.jpeg",
          address: "1738 Up"
        }
      ]
    }
  },
  render() {
    return (
      <ul className="contact_list">
        {this.props.contacts.map((contact, i)=>{
            return <li className="contact" key={i}>
              <Link className="contact_link" to={`/Contacts/${contact.name}/${contact.number}/${contact.email}/${contact.address}/${contact.profile_img}`}>
                <img className="contact_img" src={`../images/${contact.profile_img}`}/>
                <h2 className="contact_name">{contact.name}</h2>
              </Link>
            </li>
          })}
      </ul>
    )
  }
})

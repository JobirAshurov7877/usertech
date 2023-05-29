import React from 'react'

const ContactPageCard = ({icon, desc_1, desc_2}) => {
  return (
    <div>
            <div className="contact-card">
               <div className="card-icon">
                <img src={icon} alt="contact-icon" />
               </div>
               <div className="card-desc">
                <p>{desc_1}</p>
                <p>{desc_2}</p>
               </div>
            </div>
    </div>
  )
}

export default ContactPageCard
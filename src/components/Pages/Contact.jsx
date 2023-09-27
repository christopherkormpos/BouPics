import React from "react";
import './Contact.css'

export const Contact = () => {
  return (
    <div>
      <p className="p-contact">Whether you're interested in booking a session, have a question about our services,
        or just want to say hello, we'd love to hear from you. Feel free to reach out using the information below</p>
      <div className="div-contact">
        <img src="./images/contact.svg" alt="" className="contact-img" />
        <div className="contact-info">
          <p>
          <i class="fa fa-envelope"></i>george.bougas@gmail.com
            <br />
            <i class="fa fa-phone-square"></i> &nbsp;+30 699999999
            <br />
            <i class="fa fa-map-marker"></i> &nbsp;&nbsp;Agioi Anargyroi | Athens | Greece
            <br />
            <i class="fa fa-instagram"></i> &nbsp;boupics<br />
            <i class="fa fa-facebook-square"></i> &nbsp;George Bougas<br />
            <i class="fa fa-linkedin-square"></i> &nbsp;George Bougas<br />
            <i class="fa fa-briefcase"></i>Business hours | 9:00 - 17:00</p>
        </div>
      </div>
      <p className="p-contact">We look forward to connecting with you and creating beautiful memories together!</p>
    </div>
  );
};

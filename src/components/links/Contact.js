//import { SMTPClient } from 'emailjs';

function Contact() {
    return (
      <div className="contact">
        <div className="form-container">
          <header>Napiste nam</header>
          <form id="form" class="topBefore">    
              <input id="name" type="text" placeholder="JMENO" />
              <input id="email" type="text" placeholder="E-MAIL" />
              <textarea id="message" type="text" placeholder="ZPRAVA"></textarea>
              <input id="submit" type="submit" value="GO!" />
          </form>
        </div>
      </div>
    )
}
  
export default Contact;

import React from 'react';

function Contact() {

  return (
    <div>
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" /><br/>
    
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" /><br/>
    
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea><br/>
    
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
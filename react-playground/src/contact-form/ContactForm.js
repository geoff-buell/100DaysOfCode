import React from 'react';

function ContactForm() {
  
  const validateEmail = (e) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) === false) {
      e.target.style.borderColor = 'red';
    } else {
      e.target.style.borderColor = 'gainsboro';
    }
  }
  
  const checkIfEmpty = (e) => {
    if (e.target.value.length <= 0) {
      e.target.style.borderColor = 'red';
    } else {
      e.target.style.borderColor = 'gainsboro';
    }
  }
  
  const handleSubmit = (e) => {
    
    const name = document.getElementById('name'),
          email = document.getElementById('email'),
          subject = document.getElementById('subject'),
          message = document.getElementById('message');
    
    if (name.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else if (email.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else if (subject.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else if (message.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else {
      e.preventDefault();
      alert(`Thank you ${name.value}, we will be in touch with you shortly.`);
      [name.value, email.value, subject.value, message.value] = ['','','',''];
    }
  }
  
  return (
    <main>
      <form id='contact'>
        <h2>Get in touch with us!</h2>
        <div id='contact-info'>
          <input 
            onChange={checkIfEmpty}
            type='text' 
            id='name' 
            placeholder='Name'
          />
          <input 
            onChange={validateEmail}
            type='text' 
            id='email' 
            placeholder='Email'
          />
        </div>  
        <input 
          onChange={checkIfEmpty}
          type='text' 
          id='subject' 
          placeholder='Subject'
        />
        <textarea 
          onChange={checkIfEmpty}
          id='message'
        >
        </textarea>
        <button 
          onClick={handleSubmit}
          type='submit' 
          form='contact' 
          value='submit'
        >
          Submit
        </button>
      </form>
    </main>  
  );
}

export default ContactForm;
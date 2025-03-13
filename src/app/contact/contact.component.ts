import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    const templateParams = {
      from_name: this.contact.name,
      from_email: this.contact.email,
      subject: this.contact.subject,
      message: this.contact.message
    };

    emailjs
      .send(
        'service_de48wl9', 
        'template_d8s9miw',
        templateParams,
        'xR9ncd2yhWy8ma5jn'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          this.contact = { name: '', email: '', subject: '', message: '' }; // Reset form
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  }
}

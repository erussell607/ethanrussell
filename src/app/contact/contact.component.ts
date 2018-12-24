import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from '../core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [NotificationService]
})
export class ContactComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private notificationService: NotificationService
  ) {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000)
        ]
      ]
    });
  }
  onSubmit() {
    const { name, email, message } = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    const formRequest = { name, email, message, date, html };
    this.db.list('/messages').push(formRequest);

    this.form.reset();
    this.notificationService.success('Thanks, your info has been sent!');

    // TODO add somethign to clear the screen when you click submit
  }
  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }
}

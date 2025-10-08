import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required]
    });
  }
  submitForm() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      alert('Form Submitted! Check console for details.');
      this.userForm.reset();
    }
  }
}

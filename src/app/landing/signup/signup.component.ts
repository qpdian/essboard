import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Credential } from '../../shared/models/credential';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  credential = new Credential();
  submitted = false;
  active: boolean = true;
  onSubmit() {
    this.submitted = true;
    this.credential = this.signupForm.value;
    this.service.signup(this.signupForm.value);
  }
  constructor(public service: AuthService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.signupForm = this.fb.group({
      'email': [this.credential.email, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]
      ],
      'password': [this.credential.password]
    });
    this.signupForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.signupForm) { return; }
    const form = this.signupForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = { 'email': '', 'password': '' };
  validationMessages = {
    'email': {
      'required': 'Correo es requerido',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.'
    },
    'password': {
      'required': 'Contraseña es requerida'
    }
  };
}

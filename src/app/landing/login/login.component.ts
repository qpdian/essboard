import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';
import { Credential } from '../../shared/models/credential';
import { ValidationMessagesService, MessageBag } from 'ng2-custom-validation';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credential = new Credential();
  submitted = false;
  active: boolean = true;
  
  constructor(
    private router: Router, 
    private auth: AuthService,
    private _service: NotificationsService,
    private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.buildForm();
  }
  
  onSubmit() {
    this.submitted = true;
    this.credential = this.loginForm.value;
    this.auth.login(this.loginForm.value)
             .then(() => this.router.navigate([this.auth.redirectURL]))
             .catch((error) => alert(error));
  }
  
  buildForm(): void {
    this.loginForm = this.fb.group({
      'email': [this.credential.email, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]
      ],
      'password': [this.credential.password]
    });
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
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
  formErrors = {'email': '','password': ''};
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

  public title: string = 'just a title';
  public content: string = 'just content';
  public type: string = 'success';
  public deleteId: string;
  public temp: boolean[] = [true, false];
  public options = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  };
  private html = `<p>Test</p><p>A nother test</p>`;

  create() {
    switch (this.type) {
      case 'success':
        let a = this._service.success(this.title, this.content, { id: 123 });
        break;
      case 'alert':
        this._service.alert(this.title, this.content);
        break;
      case 'error':
        this._service.error(this.title, this.content);
        break;
      case 'info':
        this._service.info(this.title, this.content);
        break;
      case 'bare':
        this._service.bare(this.title, this.content);
        break;
    }
  }
  withOverride() { this._service.create('pero', 'peric', 'success', { timeOut: 0, clickToClose: false, maxLength: 3, showProgressBar: true, theClass: 'overrideTest' }) }

  withHtml() { this._service.html(this.html, 'success') }

  removeAll() { this._service.remove() }

  onCreate(event) {
    console.log(event);
  }
  onDestroy(event) {
    console.log(event);
  }

}


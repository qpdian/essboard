
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMessagesService, MessageBag } from 'ng2-custom-validation';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'my-user-detail',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
})
export class ProfileSettingsComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  errors = new MessageBag();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private auth : AuthService, 
    private validation: ValidationMessagesService,
    private notification: NotificationsService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.subscription = this.service.currentUserOb.subscribe((item: User) => {
      this.user = item;
    });
    let user = this.auth.user;
    this.service.get(user.id);
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      'username': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ]
      ],
      'password': ['']
    });

    this.validation
      .seeForErrors(this.userForm)
      .subscribe((errors: MessageBag) => this.errors = errors);
  }

  onSubmit() {
    this.service.patch({
      email: this.userForm.value['username'],
      password: this.userForm.value['password']
    }).then(() => this.onSuccess())
      .catch((error) => this.onError(error));
  }

  private onSuccess() {
    
  }

  private onError(error: string) {
    this.notification.error('Upps!', error);
  }
  user: User;

  word: any;
  hash: any = "68830aef4dbfad181162f9251a1da51b";
  private sub: Subscription;
  private subscription: Subscription;

  public options: any = {
    size: 100,
    fontColor: '#FFFFFF',
    border: "1px solid #d3d3d3",
    isSquare: true,
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //add confirmation esperar modal
  delete() {
    this.service.delete(this.user.id);
  }
  viewIcon() {
    // return md5('ffffff') ;
  }
  onKey(event: any) {
    //this.hash = md5(event.target.value);
    //this.hash= event.target.value;
  }

}
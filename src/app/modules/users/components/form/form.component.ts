import { Component } from '@angular/core';
import { User }    from '../../model/user';
import { UserService } from '../../services/user.service';
@Component({
    selector: 'form-user',
    templateUrl: 'form.component.html'
})
export class FormComponent {
    model = new User('1','','','',new Date());
    submitted = false;
    active = true;
    constructor(private userService: UserService) { }

    onSubmit() {
        this.userService.add(this.model);
        this.submitted = true;
        this.clean();
    }
    clean() {
        this.model = new User('1','','','',new Date());
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
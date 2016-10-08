import { Component, OnInit,Output, Input,EventEmitter} from '@angular/core';
import { Project } from '../../../model/project';
import { ProjectService } from '../../../services/project.service';

@Component({
    selector: 'project-share-form',
    templateUrl: 'shared-form.component.html'
})
export class SharedFormComponent implements OnInit {
    @Output() onCloseForm = new EventEmitter<boolean>();
    @Input() project:Project;
    public invitedsEmail: any;
    public message : String;
    public inviteds: any;
    constructor(private projectService: ProjectService) { }
    ngOnInit() {
        this.inviteds = this.project.members;
        this.invitedsEmail = null;
        this.message = "";
    }
    send() {
        if (this.existsInUsers(this.invitedsEmail)){
            this.inviteds.push(this.invitedsEmail);

        }else{
            this.message = "Ups . No encontramos este correo";
        }

    }
    existsInUsers(email){
        return true;
    }
    delete(any){

    }
    close(){
        this.onCloseForm.emit(false);
    }
}
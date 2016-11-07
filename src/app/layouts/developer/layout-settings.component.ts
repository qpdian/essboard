import { Component,OnInit } from '@angular/core';
import { OptionGoTo } from '../../shared/models/option-go-to';

@Component({
  selector: 'app-developer',
  templateUrl: './layout-settings.component.html',
  styleUrls: ['./developer.component.css']
})
export class LayoutSettingsComponent implements OnInit{

   optionsForSettings : OptionGoTo[];
   ngOnInit(){
     this.optionsForSettings = [
        {
            name: 'Perfil',
            description: '',
            icon: 'home',
            route: '/me/settings/profile'
        },
         {
            name: 'Proyectos',
            description: '',
            icon: 'home',
            route: '/me/settings/projects'
        },
         {
            name: 'Competencias',
            description: '',
            icon: 'home',
            route: '/me/settings/competencies'
        },
     ]
   }


 }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionGoTo } from '../../shared/models/option-go-to';

@Component({
  selector: 'app-developer',
  templateUrl: './layout.component.html',
  styleUrls: ['./developer.component.css']
})
export class LayoutComponent  {

   itemsOfMenu: OptionGoTo[] = [
        {
            name: 'Principal',
            description: 'Pagina principal',
            icon: 'home',
            route: 'user'
        },
        {
            name: 'Proyectos',
            description: 'Maneja tus proyectos',
            icon: 'home',
            route: '/user/projects'
        },
        {
            name: 'Perfil',
            description: 'Perfil del usuario',
            icon: 'folder',
            route: ''
        }
    ];
    constructor(private router: Router) { }
    goto(item: OptionGoTo): void {
        let link = [item.route];
        this.router.navigate(link);
    }


}

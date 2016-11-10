import { Component, OnInit } from '@angular/core';
import { OptionGoTo } from '../../shared/models/option-go-to';

@Component({
  selector: 'app-developer',
  templateUrl: './layout-settings.component.html'
})
export class LayoutSettingsComponent implements OnInit {

  settingOptions: OptionGoTo[];
  ngOnInit() {
    this.settingOptions = [
      {
        name: 'Perfil',
        description: '',
        icon: 'account circle',
        route: '/me/settings/profile'
      },
      {
        name: 'Proyectos',
        description: '',
        icon: 'folder',
        route: '/me/settings/projects'
      },
      {
        name: 'Competencias',
        description: '',
        icon: 'equalizer',
        route: '/me/settings/competencies'
      },
    ];
  }
}

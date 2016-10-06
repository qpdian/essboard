"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var project_list_component_1 = require('./project-list.component');
var project_detail_component_1 = require('./project-detail.component');
var project_form_component_1 = require('./project-form.component');
var project_service_1 = require('./project.service');
var project_view_holistic_component_1 = require('./project-view-holistic.component');
var state_card_component_1 = require('./state-card.component');
var alpha_card_component_1 = require('./alpha-card.component');
var alpha_states_component_1 = require('./alpha-states.component');
var projects_routing_1 = require('./projects.routing');
var alpha_conections_component_1 = require('./alpha-conections.component');
var card_1 = require('@angular2-material/card');
var checkbox_1 = require('@angular2-material/checkbox');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var list_1 = require('@angular2-material/list');
var progress_bar_1 = require('@angular2-material/progress-bar');
var input_1 = require('@angular2-material/input');
var tabs_1 = require('@angular2-material/tabs');
var menu_1 = require('@angular2-material/menu');
var toolbar_1 = require('@angular2-material/toolbar');
var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                projects_routing_1.projectsRouting,
                button_1.MdButtonModule, card_1.MdCardModule, checkbox_1.MdCheckboxModule, icon_1.MdIconModule,
                list_1.MdListModule, progress_bar_1.MdProgressBarModule, input_1.MdInputModule,
                toolbar_1.MdToolbarModule, menu_1.MdMenuModule.forRoot(),
                tabs_1.MdTabsModule
            ],
            declarations: [
                project_list_component_1.ProjectListComponent,
                project_detail_component_1.ProjectDetailComponent,
                project_form_component_1.ProjectFormComponent, project_view_holistic_component_1.ProjectViewHolistic,
                state_card_component_1.StateCard, alpha_card_component_1.AlphaCard, alpha_states_component_1.AlphaStates, alpha_conections_component_1.AlphaConectionsComponent
            ],
            providers: [
                project_service_1.ProjectService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map
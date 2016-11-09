import { Component, OnInit } from '@angular/core';
import { KernelService} from '../../shared/services/kernel.service';
import { AreaMockService } from '../../shared/modules/kernel/services/index';
@Component({
  selector: 'practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {

  areas: any = [];
  areaChoosen : any = null;
  constructor( public kernelService:KernelService,public areaService:AreaMockService) { }

  ngOnInit() {
    this.areas = this.areaService.getAreasSummary();
    this.areaChoosen = this.areaService.getAreaComplete("Cliente");
  }
  getAreChoosen(value){
    this.areaChoosen = this.areaService.getAreaComplete(value);
  }


}

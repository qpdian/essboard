import { Component, OnInit } from '@angular/core';
import { KernelService} from '../../shared/services/kernel.service';
@Component({
  selector: 'practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {

  areas: any = [];
  areaChoosen : any = null;
  constructor( public kernelService:KernelService) { }

  ngOnInit() {
    this.areas = this.kernelService.getAreas();
    this.areaChoosen = this.kernelService.getArea("Cliente");
  }
  getAreChoosen(value){
    this.areaChoosen = this.kernelService.getArea(value);
  }


}

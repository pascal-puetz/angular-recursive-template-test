import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-strong',
  templateUrl: './strong.component.html',
  styleUrls: ['./strong.component.scss']
})
export class StrongComponent {
  @Input() public text:string;
}

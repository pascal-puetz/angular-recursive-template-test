import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() public text:string;
  @Input() public allowHTML:boolean = false;
}

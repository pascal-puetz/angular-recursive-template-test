import {Component, Input, TemplateRef} from '@angular/core';
import {StrictPanelLineConfiguration} from "../panel-line.component";

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
  @Input() public template:TemplateRef<unknown>;
  @Input() public configuration:Array<StrictPanelLineConfiguration>;
}

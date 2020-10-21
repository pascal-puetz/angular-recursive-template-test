import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
  @Input() public template:TemplateRef<unknown>;
  @Input() public context:unknown;
}

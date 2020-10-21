import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-panel-line',
  templateUrl: './panel-line.component.html',
  styleUrls: ['./panel-line.component.scss']
})
export class PanelLineComponent {
  @Input() public configuration:Array<PanelLineConfiguration> = [];
  @Input() public allowHTMLTexts:boolean = false;
}

export type StrictPanelLineConfiguration = PanelLineConfigText | PanelLineConfigStrong | PanelLineConfigParagraph | PanelLineConfigList;
export type PanelLineConfiguration = StrictPanelLineConfiguration | string;

export interface PanelLineConfigText {
  type: 'text';
  text: string;
}

export interface PanelLineConfigStrong {
  type: 'strong';
  text: string;
}
export interface PanelLineConfigParagraph {
  type: 'paragraph';
  children: Array<PanelLineConfiguration>;
}
export interface PanelLineConfigList {
  type: 'list';
  children: Array<PanelLineConfiguration | PanelLineConfigListEntry>;
}
export interface PanelLineConfigListEntry {
  type: 'list-entry';
  children: Array<PanelLineConfiguration>;
}

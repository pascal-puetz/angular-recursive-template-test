import {Component, Input, TemplateRef} from '@angular/core';
import {PanelLineConfigListEntry, StrictPanelLineConfiguration} from "../panel-line.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public recursiveTemplate:TemplateRef<unknown>;
  @Input('configuration') public set unmappedConfig(configuration: Array<StrictPanelLineConfiguration | PanelLineConfigListEntry>) {
    this.configuration = configuration.map(config =>
      config.type === 'list-entry'
        ? config
        : {type: 'list-entry', children: [config]}
    );
  }

  public configuration:Array<PanelLineConfigListEntry> = [];

}

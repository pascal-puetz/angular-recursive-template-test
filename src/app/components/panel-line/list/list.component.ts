import {Component, Input, TemplateRef} from '@angular/core';
import {PanelLineConfigListEntry, PanelLineConfiguration} from "../panel-line.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public recursiveTemplate:TemplateRef<unknown>;
  @Input('configuration') public set unmappedConfig(configuration: Array<PanelLineConfiguration | PanelLineConfigListEntry>) {
    this.configuration = configuration.map(config =>
      config.type === 'list-entry'
        ? config
        : {type: 'list-entry', children: [config]}
    );
  }

  public configuration:Array<PanelLineConfigListEntry> = [];

}

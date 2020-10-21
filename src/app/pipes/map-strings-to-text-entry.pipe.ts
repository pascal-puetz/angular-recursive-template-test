import { Pipe, PipeTransform } from '@angular/core';
import {PanelLineConfiguration, StrictPanelLineConfiguration} from "../components/panel-line/panel-line.component";

@Pipe({
  name: 'mapStringsToTextEntry'
})
export class MapStringsToTextEntryPipe implements PipeTransform {

  public transform(configurationList:Array<PanelLineConfiguration>): Array<StrictPanelLineConfiguration> {
    return configurationList.map(configEntry =>
      typeof configEntry === 'string'
        ? {type: 'text', text: configEntry}
        : configEntry
    );
  }

}

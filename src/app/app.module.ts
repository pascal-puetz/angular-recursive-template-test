import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelLineComponent } from './components/panel-line/panel-line.component';
import { TextComponent } from './components/panel-line/text/text.component';
import { ListComponent } from './components/panel-line/list/list.component';
import { StrongComponent } from './components/panel-line/strong/strong.component';
import { ParagraphComponent } from './components/panel-line/paragraph/paragraph.component';
import { MapStringsToTextEntryPipe } from './pipes/map-strings-to-text-entry.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PanelLineComponent,
    TextComponent,
    ListComponent,
    StrongComponent,
    ParagraphComponent,
    MapStringsToTextEntryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

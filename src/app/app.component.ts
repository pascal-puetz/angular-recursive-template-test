import { Component } from '@angular/core';
import {PanelLineConfiguration} from "./components/panel-line/panel-line.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pLineConfig:Array<PanelLineConfiguration> = [
    {
      type: 'paragraph',
      children: [
        { type: "text", text: 'Some first paragraph text' },
        { type: "strong", text: 'with a bold' },
        { type: 'text', text: 'part.' },
      ]
    },
    { type: "text", text: 'Not' },
    { type: "strong", text: 'in' },
    { type: 'text', text: 'paragraph.' },
    {
      type: "list",
      children: [
        { type: "text", text: 'First simple entry'},
        {
          type: 'list-entry',
          children: [
            { type: 'text', text: 'Some' },
            { type: 'strong', text: 'complex' },
            { type: 'text', text: 'entry' },
          ]
        },
        { type: "text", text: 'Another simple entry'},
      ]
    }
  ];

  public pLineConfig2:Array<PanelLineConfiguration> = [
    { type: "text", text: 'Some first paragraph text' },
    {
      type: "list",
      children: [
        { type: "text", text: 'First simple entry'},
        {
          type: 'list-entry',
          children: [
            { type: 'text', text: 'Some' },
            { type: 'strong', text: 'complex' },
            { type: 'text', text: 'entry' },
          ]
        },
        { type: "text", text: 'Another simple entry'},
      ]
    },
    { type: "strong", text: 'with a bold' },
    { type: 'text', text: 'part.' },
  ];

  public pLineConfig3:Array<PanelLineConfiguration> = [
    { type: "text", text: 'Some first paragraph text' },
    { type: 'text', text: 'part.' },
    { type: "strong", text: 'with a bold' },
    {
      type: "list",
      children: [
        { type: "text", text: 'First simple entry'},
        {
          type: 'list-entry',
          children: [
            { type: 'text', text: 'Some' },
            { type: 'strong', text: 'complex' },
            { type: 'text', text: 'entry' },
          ]
        },
        { type: "text", text: 'Another simple entry'},
      ]
    },
    { type: "strong", text: 'with a bold' },
    {
      type: "list",
      children: [
        { type: "text", text: 'First simple entry'},
        {
          type: 'list-entry',
          children: [
            { type: 'text', text: 'Some' },
            { type: 'strong', text: 'complex' },
            { type: 'text', text: 'entry' },
          ]
        },
        { type: "text", text: 'Another simple entry'},
      ]
    },
    { type: "text", text: 'Some first paragraph text' },
    { type: "strong", text: 'with a bold' },
    { type: "text", text: 'Some first paragraph text' },
    { type: "strong", text: 'with a bold' },
    { type: "text", text: 'Some first paragraph text' },
    { type: "strong", text: 'with a bold' },
  ];
}

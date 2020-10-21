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
        { type: "text", text: 'Some first paragraph text ' },
        { type: "strong", text: 'with a bold ' },
        { type: 'text', text: 'part.' },
      ]
    },
    { type: "text", text: 'Not ' },
    { type: "strong", text: 'in ' },
    { type: 'text', text: 'paragraph.' },
    {
      type: "list",
      children: [
        { type: "text", text: 'First simple entry'},
        {
          type: 'list-entry',
          children: [
            { type: 'text', text: 'Some ' },
            { type: 'strong', text: 'complex ' },
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
    { type: "strong", text: 'This is bold' },
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


  public pLineConfigWithStrings:Array<PanelLineConfiguration> = [
    'This panel line uses a less verbose syntax',
    {
      type: "list",
      children: [
        'This is only a string, not a specific type',
        {
          type: 'list-entry',
          children: ['This is as well', { type: 'strong', text: '(with this inserted)' }, '- and it works!' ]
        }
      ]
    },
    {
      type: 'paragraph',
      children: [
        'Just to get another paragraph in...',
        { type: "strong", text: 'obviously' },
        'with a',
        { type: "strong", text: 'bold' },
        'text in it'
      ]
    },
  ];


  public pLineWithHTML:Array<PanelLineConfiguration> = [
    'This panel line uses a less verbose syntax (and HTML!)',
    {
      type: "list",
      children: [
        'This is only a string, not a specific type',
        'This is as well <b>(with this inserted)</b> - and it works!',
        '<b><i>Just to flex...</i></b>'
      ]
    },
    {
      type: 'paragraph',
      children: [
        'Just to get another paragraph in... <b>obviously</b> with a <b>bold</b> and a <i>cursive</i> text in it'
      ]
    },
  ];
}

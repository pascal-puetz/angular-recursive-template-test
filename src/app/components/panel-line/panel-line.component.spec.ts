import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLineComponent } from './panel-line.component';

describe('PanelLineComponent', () => {
  let component: PanelLineComponent;
  let fixture: ComponentFixture<PanelLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

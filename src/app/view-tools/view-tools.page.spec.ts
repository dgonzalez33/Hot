import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToolsPage } from './view-tools.page';

describe('ViewToolsPage', () => {
  let component: ViewToolsPage;
  let fixture: ComponentFixture<ViewToolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewToolsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewToolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

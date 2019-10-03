import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PackagesInfoPage} from './packages-info.page';

describe('PackagesInfoPage', () => {
  let component: PackagesInfoPage;
  let fixture: ComponentFixture<PackagesInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesInfoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
